'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarbertestimonialSchema extends Schema {
  up () {
    this.create('barbertestimonials', (table) => {
      table.increments()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.string('name')
      table.float('rate')
      table.string('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('barbertestimonials')
  }
}

module.exports = BarbertestimonialSchema
