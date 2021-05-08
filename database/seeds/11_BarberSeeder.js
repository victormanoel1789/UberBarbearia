'use strict'

/*
|--------------------------------------------------------------------------
| BarberSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Barber = use('App/Models/Barber')
class BarberSeeder {
  async run () {
    await Barber.createMany([
      { name: 'Rogerio Mateus Souza',avatar: 'default.png', stars: 0, },
      { name: 'Marques Peixoto Faria ',avatar: 'default.png', stars: 0, },
    ])
  }
}

module.exports = BarberSeeder
