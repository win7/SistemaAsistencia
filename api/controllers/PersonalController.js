/**
 * PersonalController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nuevo: Personal " + JSON.stringify(req.allParams()));
        return res.view("personal/nuevo", {
            titulo: "Nuevo Personal"
        });
    },

    crear: function (req, res) {
        console.log("Crear: Personal " + JSON.stringify(req.allParams()));
        Personal.create(req.allParams())
        .then(function (_personal) {
            return res.redirect("/listar_personal");
        })
        .catch(function (err) {
            return res.view("personal/nuevo", {
                titulo: "Nuevo Personal",
                personal: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar: Personal " + JSON.stringify(req.allParams()));
        Personal.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_personal) {
            if (_personal) {
                return res.view("personal/actualizar", {
                    titulo: "Editar Personal",
                    personal: _personal
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
        console.log("Listar: Personal " + JSON.stringify(req.allParams()));
        Personal.find({
            sort: "id ASC"
        })//.populate("area").populate("salario")
        .then(function (_personal) {
            return res.view("personal/listar", {
                titulo: "Listar Personal",
                personal: _personal
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Personal " + JSON.stringify(req.allParams()));
        Personal.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_personal) {
            return res.redirect("/listar_personal");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar: Personal " + JSON.stringify(req.allParams()));
        Personal.destroyOne({id: req.param("id")})
        .then(function (_personal) {
            return res.redirect("/listar_personal");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

};

