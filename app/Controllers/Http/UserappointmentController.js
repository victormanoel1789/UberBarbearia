'use strict'
const Userappointments = use('App/Models/Userappointment')
class UserappointmentController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userappointments.query().paginate(page, perPage)
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
module.exports = UserappointmentController
