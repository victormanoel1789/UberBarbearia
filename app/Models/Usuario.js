'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static get table(){
        return 'usuarios'
    }
}

module.exports = Usuario
