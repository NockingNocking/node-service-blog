/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 14:55:29
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 13:07:30
 * @FilePath: \blog-service\database\migrations\20220624065529-init-article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable("articles", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // id
      article_title: { type: STRING(30), require: true }, // 文章题目
      article_titles: { type: TEXT, require: true }, // 文章题目
      article_pic: { type: TEXT, require: false }, // 封面图
      article_author: { type: STRING(30), require: true }, // 文章作者
      article_reading_count: INTEGER, // 阅读人数
      article_tags: { type: STRING(30), require: true }, // 文章标签
      article_class: { type: STRING(10), require: true }, // 文章分类
      article_content: { type: TEXT, require: true }, // 文章内容
      created_at: DATE, // 创建时间
      updated_at: DATE, // 更新时间
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("articles");
  },
};
