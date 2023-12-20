const Service = require('egg').Service

class Category extends Service {
    // category: {}
    async addCategory (category) {
        const { ctx } = this
        const results = await ctx.model.Category.create(category)
        return results;
    }
    async upDateCategory ({search, newData}) {
        const { ctx } = this
        const results = await ctx.model.Category.findOneAndUpdate(search, newData)
        return results;
    }
    async getCategory (search) {
        const { ctx } = this
        const results = await ctx.model.Category.find(search)
        return results;
    }
    async deleteCategory (categoryId) {
        const { ctx } = this
        const results = await ctx.model.Category.deleteOne(categoryId)
        return results;
    }
}

module.exports = Category