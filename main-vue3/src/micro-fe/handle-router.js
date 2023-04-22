/*
 * @Author: shanyu
 * @Date: 2022-03-21 09:40:17
 * @LastEditTime: 2022-03-24 19:38:22
 * @LastEditors: shanyu
 * @Description: 
 */
import { getApps } from './index'
import { getNextRoute, getPrevRoute } from './rewrite-router'
import { importHTML } from './import-html'
import { bootstrap, mount, unmount } from './life-cycle'
//import { SnapshotSandbox } from './snapshot-sandbox'
import { ProxySandbox } from './proxy-sandbox'

export const handleRouter = async ()=>{
  const apps = getApps()
  // 卸载上一个路由应用
  const prevApp = apps.find(item=> getPrevRoute().startsWith(item.activeRule))
  if(prevApp){
    await unmount(prevApp)
  }
  const app = apps.find(item=> getNextRoute().startsWith(item.activeRule))
  if(!app){
    return
  }
  // 3.加载子应用
  const {template, execScripts } = await importHTML(
    app.entry
  )
  const container = document.querySelector(app.container)
  const subWrap = document.createElement('div')
  subWrap.id = "__inner_sub_wap__"
  const shadowDom = subWrap.attachShadow({mode: 'open'})
  shadowDom.innerHTML = template.innerHTML

  container.innerHTML = ""
  container.appendChild(subWrap)

  if(app.proxy){
    app.proxy.active()
  }else{
    app.proxy = new ProxySandbox(app.name)
    app.proxy.active()
  }

  // 配置全局环境变量
  window.__POWERED_BY_QIANKUN__ = true;
  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry;

  
  await execScripts(app.proxy.proxy);
  const appExports = window[app.name]

  app.bootstrap = appExports.bootstrap;
  app.mount = appExports.mount;
  app.unmount = appExports.unmount;


  await bootstrap(app);
  await mount(app);
}
