/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-15 14:24:21
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-24 17:24:11
 * @FilePath: \blog-service\config\config.default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  // 启用 stream 模式
  config.multipart = {
    mode: "stream",
    fileSize: 1048576000,
    whitelist: [".md", ".txt", ".jpg"],
  };
  // 数据库配置
  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "blog",
    password: "123456",
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1655274255108_4700";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
