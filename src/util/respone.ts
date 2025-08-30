import axios from 'axios';
import { userInforStore } from '../store/userInfoStore';

const HTTP = axios.create({
  baseURL: 'http://localhost:8080', 
  timeout: 5000, 
});

// 请求拦截器
HTTP.interceptors.request.use(
  (config) => {
    // 从 Vuex 中获取 token
    let userStore=userInforStore()
    const token =  userStore.token;
    if (token) {
      config.headers['token'] = token;
    }
    console.log('请求拦截器触发', config);
    return config;
  },
  (error) => {
    console.error('请求拦截器错误', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
HTTP.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    console.log('响应拦截器触发', response);
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应拦截器错误', error);

    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error('Response Error:', error.response.status);
      if (error.response.status === 401) {
        alert('未授权');
        userInforStore.commit('clearUserInfo');
      } else if (error.response.status === 403) {
        alert('禁止访问');
        userInforStore.commit('clearUserInfo');
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('Request Error:', error.request);
    } else {
      // 在设置请求时发生了一些事情，触发了一个错误
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default HTTP;