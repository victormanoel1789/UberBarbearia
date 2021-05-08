'use strict'

/*
|--------------------------------------------------------------------------
| BarberavailabilitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Barberavailability = use('App/Models/Barberavailability')
class BarberavailabilitySeeder {
  async run () {
    await Barberavailability.createMany([
      {barber_id:'2' },
      {barber_id:'1' }
    ])
  }
}

module.exports = BarberavailabilitySeeder
