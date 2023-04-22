/*
 * @Author: shanyu
 * @Date: 2022-03-23 19:59:27
 * @LastEditTime: 2022-03-26 16:14:39
 * @LastEditors: shanyu
 * @Description: 
 */
export class SnapshotSandbox{
  constructor(name){
    this.name = name
    this.proxy = window
    this.snapshotWindow = {}
    this.modifyMap = {}
  }
  active(){
    console.log(this.name + "active")
    this.snapshotWindow = {}
    for(let key in window){
      this.snapshotWindow[key] = window[key]
    }
    for(let key in this.modifyMap){
      window[key] = this.modifyMap[key]
    }
  }
  inactive(){
    console.log(this.name + "inactive")
    for(let key in window){
      if(this.snapshotWindow[key] !== window[key]){
        // 记录变化的
        this.modifyMap[key] = window[key]
        // 恢复快照时值
        window[key] = this.snapshotWindow[key]
      }
    }
  }
}



