/*
 * @Author: shanyu
 * @Date: 2022-03-20 13:04:15
 * @LastEditTime: 2022-03-25 16:42:40
 * @LastEditors: shanyu
 * @Description: 
 */
import '../public-path'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* eslint-disable */
let instance = null;

function render(props = {}) {
  const { container } = props;
  const shadowApp = container.firstChild.shadowRoot.querySelector('#app')
  instance = new Vue({
    render: (h) => h(App),
  }).$mount(shadowApp ? shadowApp : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  instance = null
}