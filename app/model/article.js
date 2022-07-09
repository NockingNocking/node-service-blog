/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 14:42:52
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 13:06:33
 * @FilePath: \blog-service\app\model\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Article = app.model.define("article", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // id
    article_title: STRING(30), // 文章题目
    article_titles: TEXT, // 导航栏
    article_author: STRING(10), // 文章作者
    article_reading_count: INTEGER, // 阅读人数
    article_tags: STRING(30), // 文章标签
    article_class: STRING(10), // 文章分类
    article_content: STRING, // 文章内容
    article_pic: TEXT, // 封面图片
    created_at: DATE, // 创建时间
    updated_at: DATE, // 更新时间
  });

  return Article;
};
