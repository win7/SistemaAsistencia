/**
 * AreaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nueva: Área " + JSON.stringify(req.allParams()));
        return res.view("area/nuevo", {
            titulo: "Nueva Área"
        });
    },

    crear: function (req, res) {
        console.log("Crear: Área " + JSON.stringify(req.allParams()));
        Area.create(req.allParams())
        .then(function (_area) {
            return res.redirect("/listar_areas");
        })
        .catch(function (err) {
            return res.view("area/nuevo", {
                titulo: "Nueva Área",
                area: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar: Área " + JSON.stringify(req.allParams()));
        Area.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_area) {
            if (_area) {
                return res.view("area/actualizar", {
                    titulo: "Editar Área",
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

    buscarpor: function (req, res) {
        console.log("Buscar por: Área " + JSON.stringify(req.allParams()));
        var atributo = req.param("atributo");
        var valor = req.param("valor");
        var consulta = {};
        if (valor == "") {
            consulta["sort"] = "id ASC";
        } else {
            consulta[atributo] = {contains: String(valor)};
        }
        Area.find(consulta)
        .then(function (_area) {
            if (_area) {
                return res.view("area/listar", {
                    titulo: "Listar Áreas",
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
        console.log("Listar: Áreas " + JSON.stringify(req.allParams()));
        Area.find({
            sort: "id ASC"
        })
        .then(function (_area) {
            return res.view("area/listar", {
                titulo: "Listar Áreas",
                area: _area
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Área " + JSON.stringify(req.allParams()));
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
        console.log("Eliminar: Área " + JSON.stringify(req.allParams()));
        Area.destroyOne({id: req.param("id")})
        .then(function (_area) {
            return res.redirect("/listar_areas");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },
};

