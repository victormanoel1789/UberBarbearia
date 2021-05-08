'use strict'

/*
|--------------------------------------------------------------------------
| BarbersphotoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Barbersphoto = use('App/Models/Barbersphoto')
class BarbersphotoSeeder {
  async run () {
    await Barbersphoto.createMany([
      {barber_id:'2', url: 'imagem1.png'},
      {barber_id:'1', url: 'imagem2.png'}
    ])
  }
}

module.exports = BarbersphotoSeeder
