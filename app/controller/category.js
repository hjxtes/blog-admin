const Controller = require('egg').Controller

class CategoryController extends Controller {
  async addCategory() {
    const { ctx } = this
    const { category } = ctx.service
    const query = this.ctx.query
    ctx.body = await category.addCategory(query)
  }
  async getCategory() {
    const { ctx } = this
    const { category } = ctx.service
    const query = this.ctx.query
    ctx.body = await category.getCategory(query)
  }
  async deleteCategory() {
    const { ctx } = this
    const { category } = ctx.service
    const query = this.ctx.query
    ctx.body = await category.deleteCategory(query)
  }
  async upDateCategory() {
    const { ctx } = this
    const { category } = ctx.service
    const query = this.ctx.query
    ctx.body = await category.upDateCategory(query)
  }
}

module.exports = CategoryController;
