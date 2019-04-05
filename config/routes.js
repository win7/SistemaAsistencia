/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

 module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },

  /* ÁREA */
  'GET /nueva_area': {
  	controller: 'Area',
  	action: "nuevo"
  },
  'POST /crear_area': {
  	controller: 'Area',
  	action: "crear"
  },
  'GET /buscar_area/:id': {
  	controller: 'Area',
  	action: "buscar"
  },
  'GET /listar_areas': {
  	controller: 'Area',
  	action: "listar"
  },
  'POST /actualizar_area': {
  	controller: 'Area',
  	action: "actualizar"
  },
  'GET /eliminar_area/:id': {
  	controller: 'Area',
  	action: "eliminar"
  },

  /* Salario*/
  'GET /nuevo_salario': {
    controller: 'Salario',
    action: "nuevo"
  },
  'POST /crear_salario': {
    controller: 'Salario',
    action: "crear"
  },
  'GET /buscar_salario/:id': {
    controller: 'Salario',
    action: "buscar"
  },
  'GET /listar_salarios': {
    controller: 'Salario',
    action: "listar"
  },
  'POST /actualizar_salario': {
    controller: 'Salario',
    action: "actualizar"
  },
  'GET /eliminar_salario/:id': {
    controller: 'Salario',
    action: "eliminar"
  },
  
  /* Horario*/
  'GET /nuevo_horario': {
    controller: 'Horario',
    action: "nuevo"
  },
  'POST /crear_horario': {
    controller: 'Horario',
    action: "crear"
  },
  'GET /buscar_horario/:id': {
    controller: 'Horario',
    action: "buscar"
  },
  'GET /listar_horarios': {
    controller: 'Horario',
    action: "listar"
  },
  'POST /actualizar_horario': {
    controller: 'Horario',
    action: "actualizar"
  },
  'GET /eliminar_horario/:id': {
    controller: 'Horario',
    action: "eliminar"
  },

  /* Personal*/
  'GET /nuevo_personal': {
    controller: 'Personal',
    action: "nuevo"
  },
  'POST /crear_personal': {
    controller: 'Personal',
    action: "crear"
  },
  'GET /buscar_personal/:id': {
    controller: 'Personal',
    action: "buscar"
  },
  'GET /listar_personal': {
    controller: 'Personal',
    action: "listar"
  },
  'POST /actualizar_personal': {
    controller: 'Personal',
    action: "actualizar"
  },
  'GET /eliminar_personal/:id': {
    controller: 'Personal',
    action: "eliminar"
  },

  /* Asistencia*/
  'GET /nueva_asistencia': {
    controller: 'Asistencia',
    action: "nuevo"
  },
  'POST /crear_asistencia': {
    controller: 'Asistencia',
    action: "crear"
  },
  'GET /buscar_asistencia/:id': {
    controller: 'Asistencia',
    action: "buscar"
  },
  'GET /listar_asistencias': {
    controller: 'Asistencia',
    action: "listar"
  },
  'POST /actualizar_asistencia': {
    controller: 'Asistencia',
    action: "actualizar"
  },
  'GET /eliminar_asistencia/:id': {
    controller: 'Asistencia',
    action: "eliminar"
  },

  /* Sancion*/
  'GET /nueva_sancion': {
    controller: 'Sancion',
    action: "nuevo"
  },
  'POST /crear_sancion': {
    controller: 'Sancion',
    action: "crear"
  },
  'GET /buscar_sancion/:id': {
    controller: 'Sancion',
    action: "buscar"
  },
  'GET /listar_sanciones': {
    controller: 'Sancion',
    action: "listar"
  },
  'POST /actualizar_sancion': {
    controller: 'Sancion',
    action: "actualizar"
  },
  'GET /eliminar_sancion/:id': {
    controller: 'Sancion',
    action: "eliminar"
  },
};
