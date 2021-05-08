'use strict'
const Barberservices = use('App/Models/Barberservice')
class BarberserviceController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberservices.query().paginate(page, perPage)
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

module.exports = BarberserviceController
