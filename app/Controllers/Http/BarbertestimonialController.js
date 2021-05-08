'use strict'
const Barbertestimonials = use('App/Models/Barbertestimonial')
class BarbertestimonialController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barbertestimonials.query().paginate(page, perPage)
  }
  async create ({}) {
  }

  async store ({}) {
  }

  async show ({}) {
  }

  async edit ({}) {
  }

  async update ({}) {
  }

  async destroy ({}) {
  }
}

module.exports = BarbertestimonialController
