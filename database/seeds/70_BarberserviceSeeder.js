'use strict'

/*
|--------------------------------------------------------------------------
| BarberserviceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Barberservice = use('App/Models/Barberservice')
class BarberserviceSeeder {
  async run () {
    await Barberservice.createMany([
      {barber_id:'1', price: 20 },
      {barber_id:'2', price: 20 }
    ])
  }
}

module.exports = BarberserviceSeeder
