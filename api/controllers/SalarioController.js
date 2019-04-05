/**
 * SalarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    nuevo: function (req, res) {
        console.log("Nuevo: Salario " + JSON.stringify(req.allParams()));
        return res.view("salario/nuevo", {
            titulo: "Nuevo Salario"
        });
    },

    crear: function (req, res) {
        console.log("Crear: Salario " + JSON.stringify(req.allParams()));
        Salario.create(req.allParams())
        .then(function (_salario) {
            return res.redirect("/listar_salarios");
        })
        .catch(function (err) {
            return res.view("salario/nuevo", {
                titulo: "Nuevo Salario",
                salario: req.allParams()
            });
        });
    },

    buscar: function (req, res) {
        console.log("Buscar: Salario " + JSON.stringify(req.allParams()));
        Salario.findOne({
            where: {id: req.param("id")}
        })
        .then(function (_salario) {
            if (_salario) {
                return res.view("salario/actualizar", {
                    titulo: "Editar Salario",
                    salario: _salario
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
        console.log("Listar: Salarios " + JSON.stringify(req.allParams()));
        Salario.find({
            sort: "id ASC"
        })
        .then(function (_salario) {
            return res.view("salario/listar", {
                titulo: "Listar Salarios",
                salario: _salario
            });
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

    actualizar: function (req, res) {
        console.log("Actualizar: Salario " + JSON.stringify(req.allParams()));
        Salario.update({id: req.param("id")})
        .set(req.allParams())
        .then(function (_salario) {
            return res.redirect("/listar_salarios");
        })
        .catch(function (err) {
            return res.notFound();
        });
    },

    eliminar: function (req, res) {
        console.log("Eliminar: Salario " + JSON.stringify(req.allParams()));
        Salario.destroyOne({id: req.param("id")})
        .then(function (_salario) {
            return res.redirect("/listar_salarios");
        })
        .catch(function (err) {
            return res.serverError(err);
        });
    },

};

