// 专门处理权限路由的模块
import router, { constRoutes, asyncRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    // 路由表：初始拥有静态路由权限
    permission_routes: constRoutes
  },
  mutations: {
    /**
     * 增加路由
     */
    setRoutes(state, newRoutes) {
      // 永远在静态路由的基础上增加新路由
      state.permission_routes = [...constRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes(context, menus) {
      let routes = []
      routes = filterAsyncRoutes(asyncRoutes, menus)
      context.commit('setRoutes', routes)
      routes.forEach((item) => {
        return router && router.addRoute(item)
      })
    }
  }
}

/**
 * 过滤权限路由
 * @param {Array<{}>} routes 权限路由列表
 * @param {Array<String>} permissions 用户权限列表
 */

function filterAsyncRoutes(routes, permissions) {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissions)
      }
      res.push(tmp)
    }
  })
  return res
}

/**
 * 判断路由是否有权限
 * @param {Array<String>} permissions 用户权限表
 * @param {{}} route 单个路由信息
 */
function hasPermission(permissions, route) {
  if (permissions && route.meta && route.meta.roles) {
    return permissions.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}
