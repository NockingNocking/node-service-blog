/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-06-15 14:24:21
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-06-24 13:48:41
 * @FilePath: \blog-service\config\plugin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

/** @type Egg.EggPlugin */

module.exports = {
  // 跨域处理
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  oss:{
    enable:true,
    package: 'egg-oss',
  },
  sequelize:{
    enable:true,
    package: 'egg-sequelize',
  }
};