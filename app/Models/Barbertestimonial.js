'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barbertestimonial extends Model {
    static get table(){
        return 'barbertestimonials'
    }
}

module.exports = Barbertestimonial
