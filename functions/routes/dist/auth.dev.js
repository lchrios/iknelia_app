"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('firebase-functions/lib/providers/https'),
    decode = _require.decode;

var _require2 = require('../firebase'),
    admin = _require2.admin;

var db = admin.firestore();
var auth = admin.auth();
var storage = admin.storage();
var users = db.collection('users');
var thers = db.collection('therapists');

exports.isAuthorized = function (hasRole) {
  return function (req, res, next) {
    var _res$locals = res.locals,
        role = _res$locals.role,
        uid = _res$locals.uid;

    if (!role) {
      // * no tiene rol el usuario
      return res.status(403).send({
        status: 'Unauthorized',
        message: "El usuario no tiene rol"
      });
    } else if (hasRole.indexOf(role) > -1) {
      // * revisa que el rol del usuario contenga los permitidos 
      console.log("Usuario autorizado");
      return next();
    }

    return res.status(403).send({
      status: 'Unauthorized',
      message: "El usuario no tiene rol"
    });
  };
};

exports.isAuthenticated = function (req, res, next) {
  console.log('Verificando que el tokenId sea válido');
  /* 
   * Verifica que el request contenga un ID Token.
   - Por convención el authorization header al portar 
   - un string 'Bearer ' justo antes del tokenId.
  */

  if (!(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) && !(req.cookies && req.cookies.__session)) {
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
    auth.getUser(decodedIdToken.uid).then(function (user) {
      // * Assign user role in case it doesnt have
      if (user.customClaims.role === undefined) {
        console.log("Usuario sin rol asignado :C\nAsignando rol");
        auth.setCustomUserClaims(user.uid, {
          role: "user"
        }).then(function () {
          console.log('Usuario registrado con rol "user" correctamente!');
          res.locals = _objectSpread({}, res.locals, {
            uid: decodedIdToken.uid,
            role: "user"
          });
        })["catch"](function (error) {
          console.error('Error asignando el rol de "user" al usuario', error);
          return res.status(400).send(error);
        });
      } else {
        console.log("Usuario con rol");
        res.locals = _objectSpread({}, res.locals, {
          uid: decodedIdToken.uid,
          role: user.customClaims.role
        });
      }

      next();
      return;
    });
  })["catch"](function (error) {
    console.error('Error al verififcar el Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  });
};

exports.setAdmin = function (req, res) {
  auth.setCustomUserClaims(req.params.uid, {
    role: "admin"
  }).then(function () {
    console.log('Usuario hecho admin exitosamente');
    return res.status(201);
  })["catch"](function (error) {
    console.error('Error cambiando el rol del usuario', error);
    return res.status(404).send(error);
  });
};

exports.setTherapist = function (req, res) {
  auth.setCustomUserClaims(req.params.uid, {
    role: "therapist"
  }).then(function () {
    console.log('Usuario hecho therapist exitosamente');
    return res.status(201);
  })["catch"](function (error) {
    console.error('Error cambiando el rol del usuario', error);
    return res.status(404).send(error);
  });
};

exports.setUser = function (req, res) {
  auth.setCustomUserClaims(req.params.uid, {
    role: "user"
  }).then(function () {
    console.log('Usuario hecho user exitosamente');
    return res.status(201).send({
      user: req.params.uid,
      role: "user"
    });
  })["catch"](function (error) {
    console.error('Error cambiando el rol del usuario', error);
    return res.status(404).send(error);
  });
};

exports.createUserWithEmailAndPassword = function (req, res) {
  auth.createUser({
    email: req.body.email,
    emailVerified: false,
    password: req.body.password,
    displayName: req.body.userdata.name,
    photoURL: "https://storage.googleapis.com/iknelia-3cd8e.appspot.com/usuarios/placeholders/none-user.png",
    disabled: false
  }).then(function (user) {
    console.log('Auth: Usuario creado exitosamene!'); // TODO: SEND EMAIL VERIFICATION

    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for
      // this URL must be whitelisted in the Firebase Console.
      url: 'https://www.iknelia.app/session/login',
      // This must be true for email link sign-in.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      // FDL custom domain.
      dynamicLinkDomain: 'www.iknelia.app'
    }; // * Sube el usuario creado a colleccion de usuarios

    users.doc(user.uid).set(req.body.userdata).then(function () {
      console.log('Collection: Users - Listo!', user.uid); // * Actualizar el rol del usuario a 'user'
    }).then(function () {
      auth.setCustomUserClaims(user.uid, {
        role: "user"
      }).then(function () {
        console.log('Usuario registrado con rol "user" correctamente!');
        return res.status(201).send(user);
      })["catch"](function (error) {
        console.error('Error asignando el rol de "user" al usuario', error);
        return res.status(404).send(error);
      });
    })["catch"](function (error) {
      console.error('Error registrando el usuario en collection "users"', error);
      return res.status(400).send(error);
    });
  })["catch"](function (error) {
    console.log('Error creando usuario!', error);
    return res.status(500).send(error);
  });
};

exports.updateTherapistInfo = function (req, res) {
  thers.doc(req.params.tid).set(req.body.therapistdata).then(function () {
    console.log('Collection: Therapist- Listo!'); // * Actualizar el rol del usuario a 'user'

    auth.setCustomUserClaims(user.uid, {
      role: "therapist"
    }).then(function () {
      console.log('Usuario registrado con rol "therapist" correctamente!');
      return res.status(201).send(user);
    })["catch"](function (error) {
      console.error('Error asignando el rol de "therapist" al usuario', eror);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.error('Error registrando el usuario en collection "therapists"', error);
    return res.status(404).send(error);
  });
};

exports.getFilesAndInfo = function () {
  // * Validates that the request contains a file
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send({
      "message": 'No files were uploaded.',
      "success": false
    });
  }

  return res.status(200).send({
    file: req.files['']
  });
};

exports.createTherapistWithEmailAndPassword = function (req, res) {
  auth.createUser({
    email: req.body.email,
    emailVerified: false,
    password: req.body.password,
    displayName: req.body.therapistdata.name,
    photoURL: "https://storage.googleapis.com/iknelia-3cd8e.appspot.com/usuarios/placeholders/none-user.png",
    disabled: false
  }).then(function (user) {
    // subir a colleccion de usuarios
    thers.doc(user.uid).set(req.body.therapistdata).then(function () {
      console.log('Collection: Therapist- Listo!'); // * Actualizar el rol del usuario a 'user'

      auth.setCustomUserClaims(user.uid, {
        role: "therapist"
      }).then(function () {
        console.log('Usuario registrado con rol "therapist" correctamente!');
        return res.status(201).send(user);
      })["catch"](function (error) {
        console.error('Error asignando el rol de "therapist" al usuario', eror);
        return res.status(404).send(error);
      });
    })["catch"](function (error) {
      console.error('Error registrando el usuario en collection "therapists"', error);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.log('Error creando terapeuta!', error);
    return res.status(404).send(error);
  });
};