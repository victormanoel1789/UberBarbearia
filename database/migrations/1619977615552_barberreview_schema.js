'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarberreviewSchema extends Schema {
  up () {
    this.create('barberreviews', (table) => {
      table.increments()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.float('rate')
      table.timestamps()
    })
  }

  down () {
    this.drop('barberreviews')
  }
}

module.exports = BarberreviewSchema
