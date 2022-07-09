/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-25 10:56:44
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-27 11:16:08
 * @FilePath: \blog-service\app\controller\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
"use strict";

const Controller = require("egg").Controller;
const fs = require("fs");
const path = require("path");

class UtilsController extends Controller {
  async getCities() {
    const { ctx } = this;
    const { app_id: id, app_secret: secret } = ctx.query;
    const res = await ctx.curl(
      `https://www.mxnzp.com/api/address/list?app_id=${id}&app_secret=${secret}`
    );
    const data = JSON.parse(res.data);
    if (data.code == 1) {
      ctx.body = {
        code: 200,
        data: data,
      };
    }
  }
  async uploadPic() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const result = await ctx.service.utils.uploadPic(stream);
    if (!result) {
      ctx.body = {
        code: 201,
        message: "上传失败！",
      };
      return null;
    }
    ctx.body = {
      code: 200,
      data: result.url,
    };
  }
}

module.exports = UtilsController;
