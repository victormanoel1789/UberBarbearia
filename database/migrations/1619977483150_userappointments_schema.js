'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserappointmentsSchema extends Schema {
  up () {
    this.create('userappointments', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('barber_id').references('id').inTable('barbers').unsigned().notNullable()
      table.datetime('ap_datetime', { precision: 6 })
      table.timestamps()
    })
  }

  down () {
    this.drop('userappointments')
  }
}

module.exports = UserappointmentsSchema
