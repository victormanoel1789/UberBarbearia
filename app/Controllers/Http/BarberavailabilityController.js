'use strict'
const Barberavailabilitys = use('App/Models/Barberavailability')
class BarberavailabilityController {
  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberavailabilitys.query().paginate(page, perPage)
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

module.exports = BarberavailabilityController
