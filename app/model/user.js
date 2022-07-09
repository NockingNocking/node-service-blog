/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 14:14:45
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-26 13:10:07
 * @FilePath: \blog-service\app\model\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // id
    username: STRING(30), // 姓名
    password: STRING(12),
    age: STRING(5), // 年龄
    mobile: STRING(11), // 电话
    adress: STRING(30), // 城市
    street: STRING(20), // 街道
    school: STRING(30), // 毕业学校
    start_work_time: DATE, // 开始工作时间
    created_at: DATE, // 创建时间
    updated_at: DATE, // 更新时间
  });

  return User;
};
