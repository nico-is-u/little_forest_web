// src/utils/request.js
import axios from 'axios'
import { ENV_CONFIG } from './config'

const service = axios.create({
  timeout: 10000,
  withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(config => {
  
  /* baseUrl拼接 */
  const baseUrl = ENV_CONFIG[process.env.NODE_ENV].baseUrl
  if (!config.url.startsWith('http')) {
    config.url = baseUrl + config.url
  }

  /* token部分 */

  return config

}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  const res = response.data

  /* code1 以外都当作错误处理 */
  if (res.code !== 1) {
    // 错误处理
    return Promise.reject(error)
  }
  return res
}, error => {
  return Promise.reject(error)
})

export default service
