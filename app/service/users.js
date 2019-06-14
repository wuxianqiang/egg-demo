const {Service} = require('egg')

class UserService extends Service {
  async select () {
    return await this.app.mysql.select('sourse')
  }
  async create (entity) {
    return await this.app.mysql.insert('sourse', entity)
  }
  async update (entity) {
    return await this.app.mysql.update('sourse', entity)
  }
  async delete (id) {
    return await this.app.mysql.delete('sourse', {id})
  }
}

module.exports = UserService