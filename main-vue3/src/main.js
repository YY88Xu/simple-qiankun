/*
 * @Author: shanyu
 * @Date: 2022-03-20 10:28:10
 * @LastEditTime: 2022-03-26 12:02:22
 * @LastEditors: shanyu
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
//import { registerMicroApps, start } from 'qiankun'

import { registerMicroApps, start } from './micro-fe'

import { createRouter, createWebHistory } from "vue-router"

// 数据通信
import * as appInfo from './micro-fe/global/data-props.js'
import { Custom } from './micro-fe/global/data-custom.js'
import { createStore } from './micro-fe/global/data-store.js'

const globalCustom = new Custom()
globalCustom.on("build", (data)=>{
  console.log(data)
})
window.globalCustom = globalCustom

const store = createStore()

window.store = store
store.subscribe((newValue, oldValue) => {
  console.log(newValue, oldValue, '---')
})


const apps = [
  {
    name: 'app-vue2-app', // 应用的名字
    entry: 'http://localhost:2000/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
    container: '#sub-container', // 要渲染到的容器名id
    activeRule: '/vue2', // 通过哪一个路由来激活
    appInfo,
  },
  {
    name: 'app-vue3-app',
    entry: 'http://localhost:3000/',
    container: '#sub-container',
    activeRule: '/vue3',
    appInfo,
  }
];
// 当匹配到activeRule的时候，请求获取entry资源，渲染到container中
registerMicroApps(apps); // 注册应用
start(); // 开启应用

// 1. 定义路由组件.

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
    path: '/home', 
    component: Home,
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

createApp(App).use(router).mount('#app')
