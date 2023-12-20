const Service = require('egg').Service

class Article extends Service {
    // article： {}
    async addArticle (article) {
        const { ctx } = this
        const results = await ctx.model.Article.create(article)
        return results;
    }
    async upDateArticle ({search, newData}) {
        const { ctx } = this
        const results = await ctx.model.Article.findOneAndUpdate(search, newData)
        return results;
    }
    async getArticle (search) {
        const { ctx } = this
        const results = await ctx.model.Article.find(search)
        return results;
    }
    async deleteArticle (ArticleId) {
        const { ctx } = this
        const results = await ctx.model.Article.deleteOne(ArticleId)
        return results;
    }
}

module.exports = Article