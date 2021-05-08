'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barberreview extends Model {
    static get table(){
        return 'barberreviews'
    }
}

module.exports = Barberreview
