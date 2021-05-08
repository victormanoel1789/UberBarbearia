'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/usuarios', 'UsuarioController').apiOnly()
Route.resource('/barbers', 'BarberController').apiOnly()
Route.resource('/userfavorites', 'UserfavoriteController').apiOnly()
Route.resource('/Userappointments', 'UserappointmentController').apiOnly()
Route.resource('/Barbersphotos', 'BarbersphotoController').apiOnly()
Route.resource('/Barberreviews', 'BarberreviewController').apiOnly()
Route.resource('/Barberservices', 'BarberserviceController').apiOnly()
Route.resource('/Barbertestimonials', 'BarbertestimonialController').apiOnly()
Route.resource('/Barberavailabilitys', 'BarberavailabilityController').apiOnly()
