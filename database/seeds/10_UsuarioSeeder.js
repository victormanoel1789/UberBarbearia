'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')
class UsuarioSeeder {
  async run () {
    await Usuario.createMany([
      { name: 'Rafael Moreira Matos', avatar: 'teste1.png', email: 'brendoslipknot23@gmail.com', password: 20114290065 },
      { name: 'Silvio Santos', avatar: 'teste2.png', email: 'JKnopoder@gmail.com', password: 98535912375 }
    ])
  }
}

module.exports = UsuarioSeeder
