/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-15 14:24:21
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-26 13:54:08
 * @FilePath: \blog-service\app\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post("/upload", controller.uploadmd.upload);
  router.post("/api/v1/addUser", controller.user.create);
  router.post("/api/v1/updateUser", controller.user.update);
  router.get("/api/v1/getUser", controller.user.getUser);
  router.post("/api/v1/addArticle", controller.article.addArticle);
  router.post("/api/v1/updateArticle", controller.article.updateArticle);
  router.get("/api/v1/getArticleList", controller.article.getArticleList);
  router.get("/api/v1/getArticle", controller.article.getArticle);
  router.get("/api/v1/delArticle", controller.article.delArticle);
  router.get("/api/v1/getCities", controller.utils.getCities);
  router.post("/api/v1/upload", controller.utils.uploadPic);
};
