/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 15:03:36
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 13:38:28
 * @FilePath: \blog-service\app\service\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const Service = require("egg").Service;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ArticleService extends Service {
  async addArticle(params) {
    const { ctx } = this;
    try {
      console.log(params);
      const res = await ctx.model.Article.create(params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async updateArticle(params) {
    const { ctx } = this;
    const t = await ctx.model.transaction();
    try {
      const article = await ctx.model.Article.findByPk(
        { id: params.id },
        { transaction: t }
      );

      const {
        article_title,
        article_author,
        article_tags,
        article_class,
        article_content,
        article_reading_count,
      } = params;
      const res = await article.update(
        {
          article_title,
          article_author,
          article_tags,
          article_class,
          article_content,
          article_reading_count,
        },
        { transaction: t }
      );

      return res.article_title;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getArticleList(query) {
    const { ctx } = this;
    let current = parseInt(query.current) || 1; //默认为1
    let pageSize = parseInt(query.pageSize) || 10;

    const condition = {};
    if (query?.article_title) {
      condition.article_title = { [Op.like]: "%" + query.article_title + "%" };
    }
    if (query?.article_author) {
      condition.article_author = {
        [Op.like]: "%" + query.article_author + "%",
      };
    }
    if (query?.article_tags) {
      condition.article_tags = { [Op.like]: "%" + query.article_tags + "%" };
    }
    const res = await ctx.model.Article.findAndCountAll({
      where: condition,
      offset: (current - 1) * pageSize,
      limit: pageSize,
    });
    if (!res) {
      return null;
    }
    res.current = current;
    res.pageSize = pageSize;

    return res;
  }
  async getArticle(params) {
    const { ctx } = this;
    const res = await ctx.model.Article.findAll({
      where: {
        id: params,
      },
    });
    if (!res) {
      return null;
    }
    return res;
  }
  async delArticle(params) {
    const { ctx } = this;
    const res = await ctx.model.Article.destroy({
      where: {
        id: params,
      },
    });
    if (!res) {
      return null;
    }
    return res;
  }
}

module.exports = ArticleService;
