/*
 * @Author: shanyu
 * @Date: 2022-03-21 10:18:07
 * @LastEditTime: 2022-03-21 10:38:37
 * @LastEditors: shanyu
 * @Description: 
 */
export const fetchResource = url => fetch(url).then(res => res.text());