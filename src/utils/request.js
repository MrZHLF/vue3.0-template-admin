import { nextTick } from 'vue'
import axios from 'axios'
import { ElNotification,ElLoading  } from 'element-plus'
import store from '../store/index'
import _ from 'lodash'
import { getToken, rmToken } from '@/utils/store.js'
let loadingInstance //loading 实例
let needLoadingRequestCount = 0 //当前正在请求的数量


const codeMessage = {
  400: '请求错误',
  401: '登录状态失效，请重新登录',
  403: '拒绝访问',
  404: '请求地址不存在',
  500: '服务器错误，请稍后再试',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
}

const request = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 20000,
})

request.interceptors.request.use(config => {
  showLoading()
  store.getters.token &&
      (config.headers['Authorization'] = store.getters.token)
    store.getters.tenantId &&
      (config.headers['tenant_id'] = store.getters.tenantId)
    return config
},error =>{
  closeLoading() 
  ElNotification.error({
    title: '错误',
    message: '请求超时！',
  })
  Promise.reject(error)
})  


// response拦截器
request.interceptors.response.use(
  response => {
    closeLoading()
    // 可以通过返回的code标示请求状态，如通过 XMLHttpRequest状态码标示，逻辑可写在error中
    let { status } = response
    if (status === 200) {
      return response
    } else {
      Notification.error({
        title: '错误',
        message: '请求StatusCode !== 200',
      })
      return Promise.reject(response)
    }
  },
  error => {
    closeLoading()
    if (error.response) {
      // 发出了请求，服务器返回的状态码不在2xx范围内
      errorShowMsg(error.response.status)
    } else if (error.request) {
      // 已发出请求，但是未收到回复
      // error.request 在浏览器环境是 XMLHttpRequest 的实例
      console.log(error.request)
      ElNotification.error({
        title: '错误',
        message: '服务错误',
      })
    } else {
      ElNotification.error({
        title: '错误',
        message: '服务错误',
      })
    }
    return Promise.reject(error)
  }
)


function errorShowMsg(code) {
  if (code === 401) {
    if (getToken()) {
      ElNotification.error({
        title: '错误',
        message: codeMessage[code],
        duration: 2000,
      })
    }
    rmToken()
  } else {
    ElNotification.error({
      title: '错误',
      message: codeMessage[code],
    })
  }
}

// 全局loading 函数
function showLoading() {
  if (needLoadingRequestCount === 0 && !loadingInstance) {
    loadingInstance = ElLoading.service({
      target: 'body',
      lock: true,
      text: '正在加载...',
      background: 'rgba(0,0,0,0.3)',
    })
  }
  needLoadingRequestCount++
}

function closeLoading() {
  nextTick(() => {
    // 以服务的方式调用的 Loading 需要异步关闭
    needLoadingRequestCount--
    needLoadingRequestCount = Math.max(needLoadingRequestCount, 0) // 保证大于等于0
    if (needLoadingRequestCount === 0) {
      if (loadingInstance) {
        hideLoading()
      }
    }
  })
}

//防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
//因为有时会碰到在一次请求完毕后又立刻又发起一个新的请求的情况（比如删除一个表格一行后立刻进行刷新）
//这种情况会造成连续 loading 两次，并且中间有一次极短的闪烁。通过防抖可以让 300ms 间隔内的 loading 便合并为一次，避免闪烁的情况。
var hideLoading = _.debounce(() => {
  loadingInstance.close()
  loadingInstance = null
}, 300)

export default request