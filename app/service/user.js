"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async createUser(params) {
    const { ctx } = this;
    const user = await ctx.model.User.create(params);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        message: "添加出错！",
        code: 201,
      };

      return;
    }

    return user;
  }
}

module.exports = UserService;
