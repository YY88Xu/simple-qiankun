/*
 * @Author: shanyu
 * @Date: 2022-03-21 09:38:27
 * @LastEditTime: 2022-03-26 15:52:48
 * @LastEditors: shanyu
 * @Description: 
 */
import {handleRouter} from './handle-router'

// 缓存上一个路由，下一个路由
let prevRoute = ""
let nextRoute = window.location.pathname

export const getPrevRoute = ()=> prevRoute
export const getNextRoute = ()=> nextRoute

export const rewriteRouter = ()=>{
  window.addEventListener('popstate', ()=>{
    // popstate 触发的时候，路由已经完成导航了
    prevRoute = nextRoute
    nextRoute = window.location.pathname
    handleRouter()
  })

  const rawPushState = window.history.pushState
  window.history.pushState = (...args) => {
    // 导航前
    prevRoute = window.location.pathname
    rawPushState.apply(window.history, args)
    // 导航后
    nextRoute = window.location.pathname
    handleRouter()
  }

  const rawReplaceState = window.history.replaceState
  window.history.replaceState = (...args)=>{
    // 导航前
    prevRoute = window.location.pathname
    rawReplaceState.apply(window.history, args)
    // 导航后
    nextRoute = window.location.pathname
    handleRouter()
  }
}