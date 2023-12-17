const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.config.mongoose)
    ctx.body = 'hi, egg';
  }

  // 获取列表
  async list() {
    const { ctx } = this
    ctx.body = {
      msg: 'success',
      data: [{name: 'like', age: '11'}]
    }
  }

  async test() {
    const { ctx } = this
    const { test } = ctx.service

    ctx.body = await test.getTest()
  }
}

module.exports = HomeController;
