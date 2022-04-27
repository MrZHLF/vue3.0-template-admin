const getters = {
  permission_routes: (state) => state.permission.permission_routes, //过滤之后的路由权限
  permissions: (state) =>
    state.user.userInfo.permissions ? state.user.userInfo.permissions : null,
  sidebarOpened: (state) => state.app.sidebarOpened,
  tagsViewList: (state) => state.app.tagsViewList,
  userInfo: (state) => state.user.userInfo,
  token: (state) =>
    state.user.tokenInfo ? `Bearer ${state.user.tokenInfo.access_token}` : null
}

export default getters
