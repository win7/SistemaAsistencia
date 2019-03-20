/**
 * Personal.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    dni: {
        type: "string",
        unique: true,
        required: true
    },
    nombre: {
        type: "string",
        maxLength: 50
    },
    apellido: {
        type: "string",
        maxLength: 50
    },
    telefono: {
        type: "string",
        maxLength: 15
    },
    direccion: {
        type: "string",
        maxLength: 25
    },
    email: {
        type: "string",
        maxLength: 50,
        isEmail: true
    },
    cargo: {
        type: "string",
        isIn: ["Gerente", "Secretaria", "Asistente", "Personal"]
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    area: {
        model: "Area"
    },

    usuario: {
        model: "Usuario"
    },   

    asistencias: {
        collection: "Asistencia",
        via: "personal"
    }
  },

};

