/*
 * @Author: shanyu
 * @Date: 2022-03-25 10:52:49
 * @LastEditTime: 2022-03-25 10:54:52
 * @LastEditors: shanyu
 * @Description: 通过 props 传递
 */
import { ref } from 'vue'

export const loginedFlag = ref(false)

export const changeLogined = type => loginedFlag.value = type