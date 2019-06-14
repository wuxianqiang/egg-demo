const { Controller } = require('egg')

class HomeController extends Controller {
  index() {
    const { ctx } = this
    ctx.body = 'hello world'
  }
}

module.exports = HomeController