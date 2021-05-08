'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarberserviceSchema extends Schema {
  up () {
    this.create('barberservices', (table) => {
      table.increments()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.string('name')
      table.float('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('barberservices')
  }
}

module.exports = BarberserviceSchema
