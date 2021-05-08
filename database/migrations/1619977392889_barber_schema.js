'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarberSchema extends Schema {
  up () {
    this.create('barbers', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('avatar').defaultTo('default.png')
      table.float('stars').defaultTo(0)
      table.string('latitude')
      table.string('longitude')
      table.timestamps()
    })
  }

  down () {
    this.drop('barbers')
  }
}

module.exports = BarberSchema
