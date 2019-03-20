/**
 * PersonaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
 	nuevo: function (req, res) {
 		console.log("Nueva persona " + JSON.stringify(req.allParams()));
 		return res.view("persona/nuevo", {
 			titulo: "Nueva Persona"
 		});
 	},

 	crear: function (req, res) {
 		console.log("Crear persona " + JSON.stringify(req.allParams()));
		Persona.create(req.allParams())
		.then(function (_persona) {
			return res.redirect("/listar_personas");
		})
		.catch(function (err) {
			return res.view("persona/nuevo", {
				titulo: "Nueva Persona",
				persona: req.allParams()
			});
		});
	},

	buscar: function (req, res) {
		console.log("Buscar a una persona " + JSON.stringify(req.allParams()));
		Persona.findOne({
			where: {id: req.param("id")}
		})
		.then(function (_persona) {
			if (_persona) {
				return res.view("persona/actualizar", {
					titulo: "Editar persona",
					persona: _persona
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
		Persona.find({
			sort: "id ASC"
		})
		.then(function (_persona) {
			return res.view("persona/listar", {
				titulo: "Listar Personas",
				persona: _persona
			});
		})
		.catch(function (err) {
			return res.serverError(err);
		});
	},

	actualizar: function (req, res) {
		console.log("Actualizar persona " + JSON.stringify(req.allParams()));
		Persona.update({id: req.param("id")})
		.set(req.allParams())
		.then(function (_persona) {
			return res.redirect("/listar_personas");
		})
		.catch(function (err) {
			return res.notFound();
		});
	},

	eliminar: function (req, res) {
		console.log("Eliminar Persona " + JSON.stringify(req.allParams()));
		Persona.destroyOne({id: req.param("id")})
		.then(function (_persona) {
			return res.redirect("/listar_personas");
		})
		.catch(function (err) {
			return res.serverError(err);
		});
	},
};

