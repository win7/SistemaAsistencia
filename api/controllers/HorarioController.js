/**
 * HorarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nuevo: Horario " + JSON.stringify(req.allParams()));
        return res.view("horario/nuevo", {
            titulo: "Nuevo Horario"
        });
    },

    crear: function (req, res) {
        console.log("Crear: Horario " + JSON.stringify(req.allParams()));
        Horario.create(req.allParams())
        .then(function (_horario) {
            return res.redirect("/listar_horarios");
        })
        .catch(function (err) {
            return res.view("horario/nuevo", {
                titulo: "Nuevo Horario",
                horario: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar: Horario " + JSON.stringify(req.allParams()));
        Horario.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_horario) {
            if (_horario) {
                return res.view("horario/actualizar", {
                    titulo: "Editar Horario",
                    horario: _horario
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
        console.log("Buscar por: Horario " + JSON.stringify(req.allParams()));
        var atributo = req.param("atributo");
        var valor = req.param("valor");
        var consulta = {};
        if (valor == "") {
            consulta["sort"] = "id ASC";
        } else {
            if (atributo == "turno") {
                consulta[atributo] = {contains: valor};
            } else {
                consulta[atributo] = valor;
            }
        }
        Horario.find(consulta)
        .then(function (_horario) {
            if (_horario) {
                return res.view("horario/listar", {
                    titulo: "Listar Horarios",
                    horario: _horario
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
        console.log("Listar: Horarios " + JSON.stringify(req.allParams()));
        Horario.find({
            sort: "id ASC"
        })
        .then(function (_horario) {
            return res.view("horario/listar", {
                titulo: "Listar Horarios",
                horario: _horario
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Horario " + JSON.stringify(req.allParams()));
        Horario.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_horario) {
            return res.redirect("/listar_horarios");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar: Horario " + JSON.stringify(req.allParams()));
        Horario.destroyOne({id: req.param("id")})
        .then(function (_horario) {
            return res.redirect("/listar_horarios");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

};

