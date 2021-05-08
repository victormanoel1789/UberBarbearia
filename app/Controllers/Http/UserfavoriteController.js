'use strict'
const Userfavorites = use('App/Models/Userfavorite')
class UserfavoriteController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userfavorites.query().paginate(page, perPage)
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

module.exports = UserfavoriteController
