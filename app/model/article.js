// 文章
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const ArticleSchema = new Schema({
        //规定字段的类型
        title: { type: String, require: true },
        content: { type: String, require: true},
        createdTime: { type: Date, default: new Date()},
        updatedTime: { type: Date, default: new Date()},
        visitCount: { type: Number, default: 0 },
        likeCount: { type: Number, default: 0 },
        comments: { type: Array, default: [] },
        categories: { type: Array, default: [] },
    })
    // mongoose.model(参数1：模型名称(首字母大写), 参数2：Schema，参数3：数据库集合名称)
    return mongoose.model('Article', ArticleSchema, 'articles')
}