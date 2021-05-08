'use strict'
const barbers = use('App/Models/barber')
class BarberController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return barbers.query().paginate(page, perPage)
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

module.exports = BarberController
