/*
 * @Author: shanyu
 * @Date: 2022-03-20 10:28:10
 * @LastEditTime: 2022-03-20 10:34:04
 * @LastEditors: shanyu
 * @Description: 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}
