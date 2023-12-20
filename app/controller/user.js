const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const { ctx } = this
    const { user } = ctx.service
    const query = this.ctx.query
    ctx.body = await user.login(query)
  }
}

module.exports = UserController;
