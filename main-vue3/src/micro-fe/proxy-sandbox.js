/*
 * @Author: shanyu
 * @Date: 2022-03-24 19:26:12
 * @LastEditTime: 2022-03-24 19:39:40
 * @LastEditors: shanyu
 * @Description: 
 */
export class ProxySandbox{
  active(){
    console.log(this.name + ' active')
    this.sandboxRunning = true
  }
  inactive(){
    console.log(this.name + ' inactive')
    this.sandboxRunning = false
  }
  constructor(name){
    this.name = name
    const rawWindow = window 
    const fakeWindow = {}
    const proxy = new Proxy(fakeWindow, {
      set: (target, prop, value)=>{
        if(this.sandboxRunning){
          target[prop] = value
          return true
        }
      },
      get: (target, prop)=>{
        // 如果 fakeWindow 里面有，就从 fakeWindow 里面取，否则，就从外面的 window 里面取
        let value = prop in target ? target[prop] : rawWindow[prop]
        return value
      }
    })
    this.proxy = proxy
  }
}