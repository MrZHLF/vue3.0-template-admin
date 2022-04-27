import store from '@/store/index.js'
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/store.js'
import { setUser } from '@/utils/userStore.js'
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
      // 具体业务处理 数据模拟
      let loginInfo = {
        userInfo: {
          actualName: '小周',
          admin: true,
          userId: '1184273454397001728',
          conditionDeptIds: [],
          conditionUserId: null,
          roles: ['管理员'],
          permissions: [
            'embroadcast:first:page',
            'embroadcast:infoinsert:page',
            'userManage:page',
            'common:page',
            'media:object:list',
            'audit:deal:list',
            'sys:employee:list',
            'sys:app:list',
            'sys:tenant:list',
            'pact:type:remove'
          ]
        }
      }
      store.commit('user/SET_LOGININFO', loginInfo)
      store.dispatch('permission/filterRoutes', loginInfo.userInfo.permissions)
      setUser(loginInfo.userInfo)
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
