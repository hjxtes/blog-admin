const Service = require('egg').Service;

class test extends Service {
    async getTest() {
        const { ctx } = this
        const results = await ctx.model.Test.find()
        return results;
    }
}

module.exports = test