// 分类
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const CategorySchema = new Schema({
        //规定字段的类型
        name: { type: String, require: true },
        description: { type: String },
        createdTime: { type: Date, default: new Date()},
        updatedTime: { type: Date, default: new Date()}
    })
    // mongoose.model(参数1：模型名称(首字母大写), 参数2：Schema，参数3：数据库集合名称)
    return mongoose.model('Category', CategorySchema, 'categories')
}