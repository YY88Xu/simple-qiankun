<!--
 * @Author: shanyu
 * @Date: 2022-03-20 13:04:15
 * @LastEditTime: 2022-03-22 11:01:26
 * @LastEditors: shanyu
 * @Description: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue2 App"/>
    <p class="app-p">测试 css 样式</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
.app-p{
  color: red;
}
</style>
