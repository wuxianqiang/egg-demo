const {Controller} = require('egg')

class UserController extends Controller {
  // http://127.0.0.1:7001/api/user GET请求
  async index () {
    const {ctx, service} = this
    const users = await service.users.select()
    ctx.body = users
  }
  // http://127.0.0.1:7001/api/user POST请求
  async create () {
    const {ctx, service} = this
    const { name = '未知' } = ctx.request.body
    try {
      await service.users.create({name})
      ctx.body = {
        code: 0,
        data: 'success'
      }
    } catch (error) {
      ctx.body = {
        code: 1,
        data: 'error'
      }
    }
  }
  // http://127.0.0.1:7001/api/user/:id PUT请求
  async update () {
    const {ctx, service} = this
    const { id = 0 } = ctx.params
    const { name = '未知' } = ctx.request.body
    if (!id) {
      ctx.body = '404'
      return
    }
    try {
      await service.users.update({id, name})
      ctx.body = {
        code: 0,
        data: 'success'
      }
    } catch (error) {
      ctx.body = {
        code: 1,
        data: 'error'
      }
    }
  }

  // http://127.0.0.1:7001/api/user/:id DELETE请求
  async destroy () {
    const {ctx, service} = this
    const { id = 0 } = ctx.params
    if (!id) {
      ctx.body = '404'
      return
    }
    try {
      await service.users.delete(id)
      ctx.body = {
        code: 0,
        data: 'success'
      }
    } catch (error) {
      ctx.body = {
        code: 1,
        data: 'error'
      }
    }
  }
}

module.exports = UserController