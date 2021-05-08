'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Userappointment extends Model {
    static get table(){
        return 'userappointments'
    }
}

module.exports = Userappointment
