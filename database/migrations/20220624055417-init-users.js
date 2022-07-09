/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-24 13:54:17
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-26 13:11:21
 * @FilePath: \blog-service\database\migrations\20220624055417-init-users.js
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
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("users", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // id
      username: STRING(30), // 姓名
      age: INTEGER, // 年龄
      password: STRING(12), // 密码
      mobile: STRING(11), // 电话
      adress: STRING(255), // 地址
      street: STRING(20), // 街道
      school: STRING(30), // 毕业学校
      start_work_time: DATE, // 开始工作时间
      end_work_time: DATE, // 结束工作时间
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
    await queryInterface.dropTable("users");
  },
};
