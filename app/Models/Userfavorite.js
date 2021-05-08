'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Userfavorite extends Model {
    static get table(){
        return 'userfavorites'
    }
}

module.exports = Userfavorite
