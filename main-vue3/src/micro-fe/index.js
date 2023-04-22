/*
 * @Author: shanyu
 * @Date: 2022-03-21 09:35:44
 * @LastEditTime: 2022-03-21 10:31:12
 * @LastEditors: shanyu
 * @Description: 
 */
import { handleRouter } from "./handle-router";
import { rewriteRouter } from './rewrite-router';

let _apps = []
export const getApps = ()=>_apps
// 注册
export const registerMicroApps = apps => _apps = apps
// 开启
export const start = ()=>{
  // 1.监视路由变化
  rewriteRouter();
  //初始执行匹配
  handleRouter()
}