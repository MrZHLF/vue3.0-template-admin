import store from '@/store'
export default (Vue) => {
  /**自定义按钮权限指令 */
  Vue.directive('hasPermi', {
    mounted(el, binding) {
      //获取按钮权限
      if (!Vue.config.globalProperties.$_hasPermi(binding.value)) {
        //移除不匹配的按钮
        el.parentNode.removeChild(el)
      }
    }
  })

  //检查权限方法
  Vue.config.globalProperties.$_hasPermi = function (value) {
    let isExist = false
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value
      const all_permission = '*:*:*'
      const permissions = store.getters && store.getters.permissions
      console.log(permissions, 'permissionspermissions')
      const hasPermissions = permissions.some((permission) => {
        return (
          all_permission === permission || permissionFlag.includes(permission)
        )
      })
      if (hasPermissions) {
        isExist = true
      }
    }
    return isExist
  }
}
