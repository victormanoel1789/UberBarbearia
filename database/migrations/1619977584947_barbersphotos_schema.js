'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarbersphotosSchema extends Schema {
  up () {
    this.create('barbersphotos', (table) => {
      table.increments()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('barbersphotos')
  }
}

module.exports = BarbersphotosSchema
