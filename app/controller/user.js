/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 14:16:35
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 13:39:56
 * @FilePath: \blog-service\app\controller\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

const Controller = require("egg").Controller;

class UserController extends Controller {
  async create() {
    const { ctx } = this;
    const res = await ctx.service.user.createUser(ctx.request.body);
    if (!res) {
      ctx.status = 404;
      ctx.body = {
        message: "添加出错！",
        code: 201,
      };
      return;
    }

    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async update() {
    const { ctx } = this;
    const id = toInt(ctx.request.body.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        message: "该用户不存在！",
        code: 201,
      };
      return;
    } else {
      await user.update(ctx.request.body);
      ctx.body = user;
    }
  }
  async getUser() {
    const { ctx } = this;
    let params = JSON.parse(ctx.query.params);
    const id = toInt(params.id);
    const { username, adress, age, mobile, street, school, start_work_time } =
      await ctx.model.User.findByPk(id);
    ctx.body = {
      code: 200,
      data: [
        { username, adress, age, mobile, street, school, start_work_time },
      ],
    };
  }
}

module.exports = UserController;
