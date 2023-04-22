<!--
 * @Author: shanyu
 * @Date: 2022-03-20 10:28:10
 * @LastEditTime: 2022-03-26 20:00:56
 * @LastEditors: shanyu
 * @Description: 
-->
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="/home" @click="goLocation('/home')">
          <user-outlined />
          <!-- <router-link to="/home">  Home</router-link> -->
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="/vue2" @click="goLocation('/vue2')">
          <video-camera-outlined />
          <!-- <router-link to="/vue2">  Vue2</router-link> -->
          <span>vue2</span>
        </a-menu-item>
        <a-menu-item key="/vue3" @click="goLocation('/vue3')">
          <upload-outlined />
          <!-- <router-link to="/vue3">  Vue3</router-link> -->
          <span>vue3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <span class="main-header" @click="getLogin">Main Header
        </span>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <div id="sub-container"></div>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import { Layout, Menu, } from 'ant-design-vue'
  import { defineComponent, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import { loginedFlag } from './micro-fe/store/data-props.js'
  export default defineComponent({
    components: {
      UserOutlined,
      VideoCameraOutlined,
      UploadOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      ALayout: Layout,
      AMenu: Menu,
      ALayoutSider: Layout.Sider,
      AMenuItem: Menu.Item
    },
  
    setup() {
      const selectedKeys = ref(['/home'])
      const collapsed = ref(false)
      const route = useRoute()
      const router = useRouter()

      watch([()=>route.path], pathName => {
        //console.log("pathName", pathName, route)
        selectedKeys.value = pathName
      }, {immediate: true})

      const goLocation = (pathName) => {
        router.push({path: pathName})
      }

      const getLogin = ()=>{
        console.log("main", loginedFlag.value)
      }

      return {
        selectedKeys,
        collapsed,
        goLocation,
        loginedFlag,
        getLogin
      };
    },
  });
  </script>


<style>
*{
  padding: 0;
  margin: 0;
}
.main-header{
  padding: 10px;
  display: inline-block;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
