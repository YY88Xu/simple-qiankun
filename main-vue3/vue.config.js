/*
 * @Author: shanyu
 * @Date: 2022-03-20 14:40:16
 * @LastEditTime: 2022-03-21 20:03:31
 * @LastEditors: shanyu
 * @Description: 
 */
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: '[name]-[hash]'
        },
        localsConvention: 'camelCaseOnly'
        
      }
    },
    requireModuleExtension: true
  }
};
