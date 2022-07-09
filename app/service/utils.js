/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-25 11:27:50
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-07-09 13:12:26
 * @FilePath: \blog-service\app\service\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const Service = require("egg").Service;
const OSS = require("ali-oss");
// oss配置
const aliInfo = {
  region: "oss-cn-chengdu",
  bucket: "nocking-blog-artical",
  accessKeyId: "",
  accessKeySecret: "",
};
const client = new OSS(aliInfo);

const headers = {
  // 指定该Object被下载时网页的缓存行为。
  "Cache-Control": "no-cache",
  // 指定该Object被下载时的名称。
  // 'Content-Disposition': 'oss_download.txt',
  // 指定该Object被下载时的内容编码格式。
  // 'Content-Encoding': 'UTF-8',
  // 指定过期时间。
  // 'Expires': 'Wed, 08 Jul 2022 16:57:01 GMT',
  // 指定Object的存储类型。
  // 'x-oss-storage-class': 'Standard',
  // 指定Object的访问权限。
  // 'x-oss-object-acl': 'private',
  // 设置Object的标签，可同时设置多个标签。
  // 'x-oss-tagging': 'Tag1=1&Tag2=2',
  // 指定CopyObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  // 'x-oss-forbid-overwrite': 'true',
};

class UtilsService extends Service {
  async uploadPic(stream) {
    const { ctx } = this;
    try {
      const rename = ctx.helper.uuid();
      const fileName = `blog\${rename}.${stream.filename}`;
      const result = await client.putStream(fileName, stream, { headers });
      if (!result) {
        return null;
      }
      return result;
    } catch (error) {
      if (error) {
        return null;
      }
    }
  }
}

module.exports = UtilsService;
