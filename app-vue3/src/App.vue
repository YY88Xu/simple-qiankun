<!--
 * @Author: shanyu
 * @Date: 2022-03-20 13:07:41
 * @LastEditTime: 2022-03-25 20:46:10
 * @LastEditors: shanyu
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue3 App"/>
  <p>
    loginedFlag from main: {{getMainValue()}}
  </p>
  <!-- <div>
    <button @click="change">change loginedFlag</button>
    <button @click="getLogin">get loginedFlag</button>
  </div> -->
  <div>
    <button @click="emitBuild">emit</button>
    <button @click="changeStore">change Store</button>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getMain } from './global/main.js'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    getMainValue(){
      const main = getMain()
      return main.loginedFlag
    },
    change(){
      const main = getMain()
      main.changeLogined(!main.loginedFlag.value)
    },
    getLogin(){
      console.log(getMain().loginedFlag.value)
    },
    emitBuild(){
      const globalCustom = window.globalCustom
      globalCustom.emit("build", 100)
    },
    changeStore(){
      window.store = store
      store.update({a: 100})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
