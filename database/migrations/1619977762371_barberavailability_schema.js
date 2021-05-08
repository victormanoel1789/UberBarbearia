'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarberavailabilitySchema extends Schema {
  up () {
    this.create('barberavailabilities', (table) => {
      table.increments()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.integer('weekday')
      table.string('hours')
      table.timestamps()
    })
  }

  down () {
    this.drop('barberavailabilities')
  }
}

module.exports = BarberavailabilitySchema
