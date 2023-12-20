/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 登录
  router.get('/user/login', controller.user.login);

  // 类目
  router.get('/category/addCategory', controller.category.addCategory);
  router.get('/category/getCategory', controller.category.getCategory);
  router.get('/category/upDateCategory', controller.category.upDateCategory);
  router.get('/category/deleteCategory', controller.category.deleteCategory);

  // 文章
  router.get('/article/addArticle', controller.article.addArticle);
  router.get('/article/getArticle', controller.article.getArticle);
  router.get('/article/upDateArticle', controller.article.upDateArticle);
  router.get('/article/deleteArticle', controller.article.deleteArticle);
};
