"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var auth = admin.auth();
var users = db.collection('users');
var thers = db.collection('therapists');
var roles = db.collection('roles');

var _require2 = require('../schema/user'),
    User = _require2.User,
    userConverter = _require2.userConverter;

var _require3 = require('../schema/therapist'),
    Therapist = _require3.Therapist,
    therapistConverter = _require3.therapistConverter;

exports.isAuthorized = function (hasRole, allowSameUser) {
  return function (req, res, next) {
    var _res$locals = res.locals,
        role = _res$locals.role,
        uid = _res$locals.uid;
    var id = req.headers.uid;

    if (allowSameUser && id && uid === id) {
      // * permite que el usuario pueda pedir informacion propia
      return next();
    } else if (!role) {
      // * no tiene rol el usuario
      return res.status(403).send('Unauthorized');
    } else if (hasRole.indexOf(role) > -1) {
      // * revisa que el rol del usuario contenga los permitidos 
      return next();
    }

    return res.status(403).send('Unauthorized');
  };
};

exports.isAuthenticated = function (req, res, next) {
  console.log('Verificando que el tokenId sea válido');
  /* 
   * Verifica que el request contenga un ID Token.
   - Por convención el authorization header al portar 
   - un string 'Bearer ' justo antes del tokenId.
  */

  if ((req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session)) {
    console.error('Ningun Firebase ID token fue pasado como Bearer token en el Authorization header.', 'Asegurate que autorizas tu request proveyendo el siguiente HTTP header:', 'Authorization: Bearer <Firebase ID Token>', 'o pasando una "__session" cookie.');
    return res.status(403).send('Unauthorized');
  }

  var idToken;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // * En este caso se encuentra exitosamente un formato de string que comience con 'Bearer '.
    console.log('Encontrado "Authorization" header'); // * Lee el ID Token del authorization header.

    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    // * Si no encuentra el authorization header procede a revisar si el reques cuenta con cookies de sesión.
    console.log('Encontrado "__session" cookie'); // * Lee el ID Token de la cookie.

    idToken = req.cookies.__session;
  } else {
    // * No se encontró ni un authorization header válido o alguna cookie. 
    return res.status(403).send('Unauthorized');
  } // * Una vez obtenido el ID Token, procedemos a verificar que sea correcto mediante firebase auth


  auth.verifyIdToken(idToken).then(function (decodedIdToken) {
    // * Obtenemos el decodedIDToken como resultado de una operación exitosa
    console.log('ID Token verificado!');
    res.locals = _objectSpread({}, res.locals, {
      uid: decodedIdToken.uid,
      role: decodedIdToken.role
    });
    next();
    return;
  })["catch"](function (error) {
    console.error('Error al verififcar el Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  });
  /*
      * Esta es una forma diferente de hacer exactamente lo mismo que el código previo
      * pero la estructura es distinta, en este se usa un bloque try catch para manejar
      * el error que nos daría el caso de que no se pueda verificar el token muestra el error 
   ?  try {
   ?      const decodedIdToken = await auth.verifyIdToken(idToken);
   ?      console.log('ID Token correctamente decodificado', decodedIdToken);
   ?      req.user = decodedIdToken;
   ?      next();
   ?      return;
   ?  } catch (error) {
   ?      console.error('Error al verififcar el Firebase ID token:', error);
   ?      res.status(403).send('Unauthorized');
   ?      return;
   ?  }
  */
};

exports.setAdmin = function (req, res) {
  auth.setCustomUserClaims(req.params.uid, {
    admin: true
  }).then(function () {
    console.log('Usuario hecho admin exitosamente');
    return res.status(201);
  });
};

exports.createUserWithEmailAndPassword = function (req, res) {
  auth.createUserWithEmailAndPassword(req.body.email, req.body.password).then(function (user) {
    // * Sube el usuario creado a colleccion de usuarios
    users.doc(user.uid).withConverter(userConverter).set(_construct(User, _toConsumableArray(req.body.userdata))).then(function () {
      console.log('Collection: Users - Listo!');
    }).then(function () {
      // * Actualizar el rol del usuario a 'user'
      auth.setCustomUserClaims(user.uid, {
        user: true
      }).then(function () {
        console.log('Usuario registrado con rol "user" correctamente!');
        return res.status(201).send(user);
      });
    });
  })["catch"](function (error) {
    console.log('Error creando usuario!', error);
    return res.status(500).send(error);
  });
};

exports.createTherapistWithEmailAndPassword = function (req, res) {
  auth.createUserWithEmailAndPassword(req.body.email, req.body.password).then(function (user) {
    // subir a colleccion de usuarios
    thers.doc(user.uid).withConverter(therapistConverter).set(_construct(Therapist, _toConsumableArray(req.body.therapistdata))).then(function () {
      console.log('Collection: Therapist- Listo!');
    }).then(function () {
      // * Actualizar el rol del usuario a 'user'
      auth.setCustomUserClaims(user.uid, {
        therapist: true
      }).then(function () {
        console.log('Usuario registrado con rol "therapist" correctamente!');
        return res.status(201).send(user);
      });
    });
  })["catch"](function (error) {
    console.log('Error creando terapeuta!', error);
    return res.status(404).send(error);
  });
};