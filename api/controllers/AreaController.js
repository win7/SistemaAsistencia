/**
 * AreaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nueva area " + JSON.stringify(req.allParams()));
        return res.view("area/nuevo", {
            titulo: "Nueva Area"
        });
    },

    crear: function (req, res) {
        console.log("Crear area " + JSON.stringify(req.allParams()));
        Area.create(req.allParams())
        .then(function (_area) {
            return res.redirect("/listar_areas");
        })
        .catch(function (err) {
            return res.view("area/nuevo", {
                titulo: "Nueva Area",
                area: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar a una area " + JSON.stringify(req.allParams()));
        Area.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_area) {
            if (_area) {
                return res.view("area/actualizar", {
                    titulo: "Editar area",
                    area: _area
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
        console.log("Listar Personas " + JSON.stringify(req.allParams()));
        Area.find({
            sort: "id ASC"
        })
        .then(function (_area) {
            return res.view("area/listar", {
                titulo: "Listar Areas",
                area: _area
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar area " + JSON.stringify(req.allParams()));
        Area.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_area) {
            return res.redirect("/listar_areas");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar Area " + JSON.stringify(req.allParams()));
        Area.destroyOne({id: req.param("id")})
        .then(function (_area) {
            return res.redirect("/listar_areas");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },
};

