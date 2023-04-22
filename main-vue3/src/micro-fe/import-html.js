/*
 * @Author: shanyu
 * @Date: 2022-03-21 10:19:22
 * @LastEditTime: 2022-03-26 19:31:52
 * @LastEditors: shanyu
 * @Description: 
 */
import { fetchResource } from './fetch-resource'

export const importHTML = async (url) => {
  const html = await fetchResource(url)
  const template = document.createElement("div")
  
  template.innerHTML = html
  const scripts = template.querySelectorAll("script");
  const styles = template.querySelectorAll("link")

  // 所有 style 获取的内容
  function fetchStyles(){
    const filterStyle = Array.from(styles).filter(item=>item.rel==='stylesheet')
    return Promise.all(filterStyle.map(style => {
      const hrefUrl = style.href.replace('http://localhost:8080/', url)
      return fetchResource(hrefUrl)
    } ))
  }

  const endStyles = await fetchStyles()
 // const tplHeader = template.querySelector("header")
  
  for(let eStyle of endStyles){
    const newStyle = document.createElement('style')
    newStyle.setAttribute('type', 'text/css')
    newStyle.innerHTML = eStyle
    template.appendChild(newStyle)
  }


  // 获取所有 script 标签的代码
  function getExternalScripts() {
    return Promise.all(
      Array.from(scripts).map((script) => {
        const src = script.getAttribute("src");
        if (!src) {
          return Promise.resolve(script.innerHTML);
        } else {
          return fetchResource(src.startsWith("http") ? src : `${url}${src}`);
        }
      })
    );
  }

  // 获取并执行所有的 script脚本代码
  async function execScripts(global) {
    const scripts = await getExternalScripts();

    //手动构造一个 CommonJS 模块环境
    //const module = { exports: {} };
    /* eslint-disable */
    //const exports = module.exports;

    scripts.forEach((code) => {
      // eval执行的代码可以访问外部变量
      //eval(code);
      window.proxy = global
      const scriptText = `
        ((window) => {
          ${code}
        })(window.proxy)
      `
      //eval(scriptText)
      new Function(scriptText)()
    });

    //return module.exports;
  }
  return {
    template,
    getExternalScripts,
    execScripts,
  };
  
}