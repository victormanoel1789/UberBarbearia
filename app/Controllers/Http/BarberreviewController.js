'use strict'
const Barberreviews = use('App/Models/Barberreview')
class BarberreviewController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberreviews.query().paginate(page, perPage)
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

module.exports = BarberreviewController
