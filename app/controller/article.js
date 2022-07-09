/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 15:01:17
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 13:48:45
 * @FilePath: \blog-service\app\controller\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async addArticle() {
    const { ctx } = this;
    ctx.request.body.article_titles = JSON.stringify(
      ctx.request.body.article_titles
    );
    const res = await ctx.service.article.addArticle(ctx.request.body);
    if (!res) {
      (ctx.status = 404),
        (ctx.body = {
          message: "添加失败!",
          code: 201,
        });
    }
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async updateArticle() {
    const { ctx } = this;
    const {
      id,
      article_title,
      article_author,
      article_tags,
      article_class,
      article_content,
      article_reading_count,
      article_titles,
    } = ctx.request.body;
    const res = await ctx.service.article.updateArticle({
      id,
      article_title,
      article_author,
      article_tags,
      article_class,
      article_content,
      article_reading_count,
      article_titles,
    });
    if (!res) {
      (ctx.status = 404),
        (ctx.body = {
          message: "更新失败!",
          code: 201,
        });
    }
    ctx.body = {
      message: res + "更新成功!",
      code: 200,
    };
  }
  async getArticleList() {
    const { ctx } = this;
    let params = JSON.parse(ctx.query.params);
    const res = await ctx.service.article.getArticleList(params);
    if (!res) {
      (ctx.status = 404),
        (ctx.body = {
          message: "查询失败！",
          code: 201,
        });
    }
    ctx.body = {
      data: res,
      code: 200,
    };
  }
  async getArticle() {
    const { ctx } = this;
    const id = ctx.query.id;

    const res = await ctx.service.article.getArticle(id);
    if (!res) {
      ctx.status = 404;
      ctx.body = {
        code: 201,
        message: "查询失败！",
      };
    }
    ctx.body = {
      data: res,
      code: 200,
    };
  }
  async delArticle() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.article.delArticle(id);
    if (!res) {
      ctx.status = 404;
      ctx.body = {
        code: 201,
        message: "删除失败！",
      };
    }
    ctx.body = {
      code: 200,
      message: "删除成功!",
    };
  }
}

module.exports = ArticleController;
