'use strict'

/*
|--------------------------------------------------------------------------
| UserfavoriteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Userfavorite = use('App/Models/Userfavorite')
class UserfavoriteSeeder {
  async run () {
    await Userfavorite.createMany([
      {Usuario_id:'2', barber_id:'1'}
    ])   
  }
}

module.exports = UserfavoriteSeeder
