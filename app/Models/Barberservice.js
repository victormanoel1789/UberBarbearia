'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barberservice extends Model {
    static get table(){
        return 'barberservices'
    }
}

module.exports = Barberservice
