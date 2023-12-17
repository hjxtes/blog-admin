
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 连接数据库
    const UserLoginSchema = new Schema({
        //规定字段的类型；
        // _id: {
        //   type: Schema.ObjectId,
        // }，
        // ↑上面那个_id有时候新增的时候回报：“在保存之前，文档必须具有_ID”英文：“document must have an _id before saving”导致添加不上，注释就行了！！！
        username: { type: String },
        password: { type: String }
    });

    return mongoose.model('aaaa', UserLoginSchema, 'user'); //'userlogin'
    // 理解：表名是指定查找的，必须和mongodb中的表名相同，
    //mongodb中的表名后面不知道为啥要加个s,
    //例：这里叫user，mongodb中的必须叫users；
    //UserLoginallSchema是参数；
}