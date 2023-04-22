/*
 * @Author: shanyu
 * @Date: 2022-03-20 13:07:41
 * @LastEditTime: 2022-03-25 16:40:34
 * @LastEditors: shanyu
 * @Description: 
 */
import '../public-path'
import App from './App.vue'
import { createApp } from 'vue'

let instance = null

function render(props = {}) {
  instance = createApp(App)
  const { container } = props;
  const shadowApp = container.firstChild.shadowRoot.querySelector('#app')
  instance.mount(shadowApp ? shadowApp : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  //console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  //console.log('[vue] props from main framework', props);
  render(props)
}
export async function unmount() {
  instance.unmount()
  //instance = null
}
