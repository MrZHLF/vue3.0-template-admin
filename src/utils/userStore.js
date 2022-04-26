import store from 'store'
const KEY_RAW = 'hngd_cloud_platform_user'

/**
 * 设置User信息
 * @param {Object} User User
 */
export const setUser = User => {
  store.set(KEY_RAW, User)
}

/**
 * 获取User
 */
export const getUser = () => {
  return store.get(KEY_RAW)
}

/**
 * 清除User
 */
export const rmUser = () => {
  store.remove(KEY_RAW)
}
