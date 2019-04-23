/**
 * SancionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: async function (req, res) {
        console.log("Nueva: Sanción " + JSON.stringify(req.allParams()));
        var personales_ = await Personal.find({
            select: ["id", "nombre", "apellidos"],
            sort: "id ASC"
        });
        return res.view("sancion/nuevo", {
            titulo: "Nueva Sanción",
            personales: personales_
        });
    },

    crear: function (req, res) {
        console.log("Crear: Sanción " + JSON.stringify(req.allParams()));
        Sancion.create(req.allParams())
        .then(function (_sancion) {
            return res.redirect("/listar_sanciones");
        })
        .catch(function (err) {
            return res.view("sancion/nuevo", {
                titulo: "Nueva Sanción",
                sancion: req.allParams()
            });
        });
    },

    buscar: async function (req, res) {
        console.log("Buscar: Sanción " + JSON.stringify(req.allParams()));
        var personales_ = await Personal.find({
            select: ["id", "nombre", "apellidos"],
            sort: "id ASC"
        });
        Sancion.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_sancion) {
            if (_sancion) {
                return res.view("sancion/actualizar", {
                    titulo: "Editar Sanción",
                    sancion: _sancion,
                    personales: personales_
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
        console.log("Listar: Sancións " + JSON.stringify(req.allParams()));
        Sancion.find({
            sort: "id ASC"
        }).populate("personal")
        .then(function (_sancion) {
            return res.view("sancion/listar", {
                titulo: "Listar Sanciones",
                sancion: _sancion
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Sanción " + JSON.stringify(req.allParams()));
        Sancion.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_sancion) {
            return res.redirect("/listar_sanciones");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar: Sanción " + JSON.stringify(req.allParams()));
        Sancion.destroyOne({id: req.param("id")})
        .then(function (_sancion) {
            return res.redirect("/listar_sanciones");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

};

