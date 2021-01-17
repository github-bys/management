/**
 * 基于 axios 封装的请求模块
 */

 import axios from 'axios'

 export function request(config) { 
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://192.168.0.107:8080',
        timeout: 5000
    })
    
    // 2.发送真正的网络请求
    return instance(config)
}
