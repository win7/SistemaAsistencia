/**
 * AsistenciaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nueva: Asistencia " + JSON.stringify(req.allParams()));
        return res.view("asistencia/nuevo", {
            titulo: "Nueva Asistencia"
        });
    },

    crear: function (req, res) {
        console.log("Crear: Asistencia " + JSON.stringify(req.allParams()));
        Asistencia.create(req.allParams())
        .then(function (_asistencia) {
            return res.redirect("/listar_asistencias");
        })
        .catch(function (err) {
            return res.view("asistencia/nuevo", {
                titulo: "Nueva Asistencia",
                asistencia: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar: Asistencia " + JSON.stringify(req.allParams()));
        Asistencia.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_asistencia) {
            if (_asistencia) {
                return res.view("asistencia/actualizar", {
                    titulo: "Editar Asistencia",
                    asistencia: _asistencia
                });
            } else {
                return res.notFound();
            }
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    listar: function (req, res) {
        console.log("Listar: Asistencias " + JSON.stringify(req.allParams()));
        Asistencia.find({
            sort: "id ASC"
        })
        .then(function (_asistencia) {
            return res.view("asistencia/listar", {
                titulo: "Listar Asistencias",
                asistencia: _asistencia
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Asistencia " + JSON.stringify(req.allParams()));
        Asistencia.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_asistencia) {
            return res.redirect("/listar_asistencias");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar: Asistencia " + JSON.stringify(req.allParams()));
        Asistencia.destroyOne({id: req.param("id")})
        .then(function (_asistencia) {
            return res.redirect("/listar_asistencias");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

};

