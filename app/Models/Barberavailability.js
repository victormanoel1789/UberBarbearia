'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barberavailability extends Model {
    static get table(){
        return 'barberavailabilities'
    }
}

module.exports = Barberavailability
