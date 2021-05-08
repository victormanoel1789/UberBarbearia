'use strict'

/*
|--------------------------------------------------------------------------
| BarbertestimonialSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Barbertestimonial = use('App/Models/Barbertestimonial')
class BarbertestimonialSeeder {
  async run () {
    await Barbertestimonial.createMany([
      {barber_id:'1', name: 'Brendo William', rate: 3 },
      {barber_id:'2', name: 'Xumia Batche', rate: 4 }
    ])
  }
}

module.exports = BarbertestimonialSeeder
