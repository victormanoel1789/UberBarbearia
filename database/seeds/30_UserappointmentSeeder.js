'use strict'

/*
|--------------------------------------------------------------------------
| UserappointmentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Userappointment = use('App/Models/Userappointment')
class UserappointmentSeeder {
  async run () {
    await Userappointment.createMany([
      {Usuario_id:'1', barber_id:'2',ap_datetime: '2021-04-20'},
    ])
  }
}

module.exports = UserappointmentSeeder
