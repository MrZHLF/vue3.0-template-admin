//此文件为本地开发使用

import Qs from 'qs'
import request from '@/utils/request.js'

//获取token，此接口为测试环境使用
function getTokenByLogin(username, password) {
  let defaultConfig = {
    grant_type: 'password',
    client_id: 'saas',
    client_secret: '123456',
    // client_secret: 'kvcW52uqgZvZ!@kI', //预发布密钥
  }

  return request({
    method: 'post',
    url: '/uaa/oauth/token',
    data: Qs.stringify(
      Object.assign(
        {
          username: JSON.stringify({
            authenticationType: 'mobile',
            principal: username,
          }),
          password,
        },
        defaultConfig
      )
    ),
  })
}
// 获取用户信息，此接口为测试环境使用
const getUserInfos = () =>
  request({
    method: 'get',
    url: '/auth/m/tenants/authorizations',
  })

export { getTokenByLogin, getUserInfos }
