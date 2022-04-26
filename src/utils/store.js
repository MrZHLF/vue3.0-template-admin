import store from 'store'
const KEY_RAW = 'hngd_cloud_platform_token'

/**
 * 设置token信息
 * @param {Object} token token
 */
export const setToken = token => {
  setTokenExpireTime(token)
  store.set(KEY_RAW, token)
}

/**
 * 获取token
 */
export const getToken = () => {
  return store.get(KEY_RAW)
}

/**
 * 清除token
 */
export const rmToken = () => {
  store.remove(KEY_RAW)
}

/**
 * 设置token 过期时间 expires_in
 * 原expires_in为一个时间段，例7200s
 * @param {Object} token token信息
 */
function setTokenExpireTime(token) {
  if (token['expires_in']) {
    token['expires_in'] += getCurrentTime()
  }

  function getCurrentTime() {
    return Date.parse(new Date()) / 1000
  }
}
