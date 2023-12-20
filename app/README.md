// 文章集合
db.createCollection("articles");
db.articles.insert({
  title: "文章标题",
  content: "文章内容",
  publishedDate: new Date(),
  visitCount: 0,
  likeCount: 0,
  comments: [
    {
      content: "评论内容",
      postedDate: new Date(),
      userId: "用户ID"
    }
    // 更多评论...
  ],
  categories: ["分类1", "分类2"]
});

// 用户集合
db.createCollection("users");
db.users.insert({
  username: "用户名",
  password: "加密后的密码",
  email: "用户邮箱",
  createdDate: new Date()
});

// 分类集合
db.createCollection("categories");
db.categories.insert({
  name: "分类名称",
  description: "分类描述"
});

// 视频集合（假设为日常vlog）
db.createCollection("vlogs");
db.vlogs.insert({
  title: "vlog标题",
  description: "vlog描述",
  url: "视频URL",
  publishedDate: new Date()
});

// 简介集合
db.createCollection("about");
db.about.insert({
  content: "个人或网站介绍"
});