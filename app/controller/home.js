const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.config.mongoose)
    ctx.body = 'hi, egg';
  }

  // 获取列表
  list() {
    const { ctx } = this
    ctx.body = {
      msg: 'success',
      data: [{name: 'like', age: '11'}]
    }
  }
}

module.exports = HomeController;
