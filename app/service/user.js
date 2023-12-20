const Service = require('egg').Service

class User extends Service {
    async login(query) {
        const { ctx } = this
        const results = await ctx.model.User.find(query)
        return results;
    }
}

module.exports = User