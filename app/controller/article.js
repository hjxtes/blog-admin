const Controller = require('egg').Controller

class ArticleController extends Controller {
  async addArticle() {
    const { ctx } = this
    const { article } = ctx.service
    const query = this.ctx.query
    ctx.body = await article.addArticle(query)
  }
  async getArticle() {
    const { ctx } = this
    const { article } = ctx.service
    const query = this.ctx.query
    ctx.body = await article.getArticle(query)
  }
  async deleteArticle() {
    const { ctx } = this
    const { article } = ctx.service
    const query = this.ctx.query
    ctx.body = await article.deleteArticle(query)
  }
  async upDateArticle() {
    const { ctx } = this
    const { article } = ctx.service
    const query = this.ctx.query
    ctx.body = await article.upDateArticle(query)
  }
}

module.exports = ArticleController;
