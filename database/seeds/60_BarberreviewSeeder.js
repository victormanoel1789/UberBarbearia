'use strict'

/*
|--------------------------------------------------------------------------
| BarberreviewSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Barberreview = use('App/Models/Barberreview')
class BarberreviewSeeder {
  async run () {
    await Barberreview.createMany([
      {barber_id:'1', rate: 3},
      {barber_id:'2', rate: 5}
    ])
  }
}

module.exports = BarberreviewSeeder
