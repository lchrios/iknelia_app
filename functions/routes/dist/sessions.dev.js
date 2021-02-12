"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getSession = function (req, res) {
  sess.doc(req.params.sid).get().then(function (doc) {
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error obteniendo el session document', error);
    return res.status(404).send(error);
  });
};

exports.newSession = function (req, res) {
  //console.log(req.body.sessiondata)
  sess.add(req.body.sessiondata).then(function (doc) {
    /* 
    ! no es necesario ya utilizar este codigo
    ! se comenta por si sirve luego
    // actualizar el id del documento
    sess
        .doc(doc.id)
        .update({id: doc.id})
        .then(() => {
            console.log('Campo session.id actualizado exitosamente!');
        })
        .catch(error => {
            console.log('Error actualizando el campo session.id', error);
            return res.status(404).send(error);
        })
    */
    // * añade la cita al paciente
    var userref = users.doc(req.body.sessiondata.patient);
    userref.get().then(function (usdoc) {
      var sessdata = usdoc.data().sessions;
      sessdata.push(doc.id);
      userref.update({
        sessions: sessdata
      }).then(function () {
        console.log('Campo user.sessions actualizado correctamente');
      })["catch"](function (error) {
        console.log('Error actualizando el campo user.sessions', error);
        return res.status(404).send(error);
      });
    }).then(function () {
      // * añade la cita al terapeuta 
      var terref = ther.doc(req.body.sessiondata.therapist);
      terref.get().then(function (terdoc) {
        var data = terdoc.data().sessions;
        data.push(doc.id);
        userref.update({
          sessions: data
        }).then(function () {
          console.log('Campo user.sessions actualizado correctamente');
          return res.status(201).send(doc.id);
        })["catch"](function (error) {
          console.log('Error actualizando el campo therapist.sessions', error);
          return res.status(404).send(error);
        });
      })["catch"](function (error) {
        console.log('Error obteniendo los datos del terapeuta', error);
        return res.status(404).send(error);
      });
    })["catch"](function (error) {
      console.log('Error obteniendo los datos del usuario', error);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.log("Unable to create new blog", error);
    return res.status(404).send(error);
  });
};

exports.updateSession = function (req, res) {
  sess.doc(req.params.sid).set(req.body.sessiondata).then(function () {
    console.log('Sesion actualizada con exito!');
    return res.status(204);
  })["catch"](function (error) {
    console.log('Error actualizando el session document', error);
    return res.status(404).send(error);
  });
};

exports.deleteSession = function (req, res) {
  sess.doc(req.params.sid)["delete"]().then(function () {
    console.log('Sesion cancelada con exito!');
    return res.status(204);
  })["catch"](function () {
    console.error('Error borrando el documento de sesion', error);
    return res.status(404).send(error);
  });
};