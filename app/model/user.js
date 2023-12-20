// 用户
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    // 连接数据库
    const UserSchema = new Schema({
        //规定字段的类型
        username: { type: String, require: true },
        password: { type: String, require: true}
    })
    // mongoose.model(参数1：模型名称(首字母大写), 参数2：Schema，参数3：数据库集合名称)
    return mongoose.model('User', UserSchema, 'users')
}