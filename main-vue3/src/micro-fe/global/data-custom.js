/*
 * @Author: shanyu
 * @Date: 2022-03-25 16:50:05
 * @LastEditTime: 2022-03-25 16:51:34
 * @LastEditors: shanyu
 * @Description: 
 */

export class Custom{
  // 事件监听
  on(name, cb){
    window.addEventListener(name, e=>{
      cb(e.detail)
    })
  }
  // 事件触发
  emit(name, data){
    const event = new CustomEvent(name, {detail: data})
    window.dispatchEvent(event)
  }
}