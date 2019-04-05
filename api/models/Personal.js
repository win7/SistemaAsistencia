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
    apellidos: {
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
        isIn: ["Gerente", "Secretaria", "Asistente"]
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
    salario: {
        model: "Salario"
    },
    horario: {
        model: "Horario"
    },
    asistencias: {
        collection: "Asistencia",
        via: "personal"
    },
    sancion: {
        collection: "Sancion",
        via: "personal"
    }

  },

};

