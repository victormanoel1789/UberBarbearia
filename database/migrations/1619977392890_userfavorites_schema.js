'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserfavoritesSchema extends Schema {
  up () {
    this.create('userfavorites', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('userfavorites')
  }
}

module.exports = UserfavoritesSchema
