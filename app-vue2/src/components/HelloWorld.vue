<!--
 * @Author: shanyu
 * @Date: 2022-03-20 13:04:15
 * @LastEditTime: 2022-03-23 19:43:42
 * @LastEditors: shanyu
 * @Description: 
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="setWindowA">set window.a</button>
    <button @click="getWindowA">get window.a</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getWindowA(){
      console.log(window.a)
    },
    setWindowA(){
      window.a = 'vue2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
