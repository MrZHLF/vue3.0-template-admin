import { getToken } from '@/utils/store.js'
import { getUser } from '@/utils/userStore.js'
export default {
  namespaced: true,
  state: {
    tokenInfo: getToken() || null, //保存登录状态信息
    userInfo: getUser() || null, //保存当前所在租户信息
    tenantId: 1
  },
  mutations: {
    UPDATE_USERINFO: (state, payload) => {
      state.userInfo = payload
    },
    //只在本地测试环境生效
    SET_LOGININFO: (state, data) => {
      console.log(data, 'datadata')
      state.tokenInfo = data.tokenInfo
      state.userInfo = data.userInfo
    }
  },
  actions: {
    updateUserInfo({ commit }) {
      commit('UPDATE_USERINFO', getUser() || null)
    }
  }
}
