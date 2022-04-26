import store from '@/store/index.js'
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/store.js'
NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  console.log(hasToken, 'hasTokenhasToken')
  console.log(store, 'storestore')
  if (hasToken) {
    // 判断token是否存在，进行业务处理
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 具体业务处理
      // 获取用户信息 更新权限码
      store.dispatch('permission/filterRoutes', store.getters.permissions)
      next()
    }
  } else {
    // token不存在
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
