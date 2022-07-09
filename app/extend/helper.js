/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 14:29:54
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-26 14:22:07
 * @FilePath: \blog-service\app\extend\helper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// app/extend/helper.js
const { v4: uuidv4 } = require("uuid");
module.exports = {
  uuid() {
    let strUUID = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    let strUUID2 = strUUID.replace(/-/g, ""); // 去掉-字符，使用空格代替
    return strUUID2;
  },
};
