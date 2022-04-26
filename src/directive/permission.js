import store from "@/store";

/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkPermi(value) {
  const all_permission = "*:*:*";
  if (all_permission == store.getters.permissions) {
    return true;
  }
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters && store.getters.permissions;
    const permissionDatas = value;

    const hasPermission = permissions.some(permission => {
      return permissionDatas.includes(permission);
    });

    if (!hasPermission) {
      return false;
    }
    return true;
  } else {
    console.error(
      `need roles! Like checkPermi="['system:user:add','system:user:edit']"`
    );
    return false;
  }
  // const permissions = store.getters && store.getters.permissions;
  // if (value && value instanceof Array && value.length > 0) {
  //   const permissionFlag = value;

  //   const hasPermissions = permissions.some(permission => {
  //     return (
  //       all_permission === permission || permissionFlag.includes(permission)
  //     );
  //   });
  //   if (!hasPermissions) {
  //     el.parentNode && el.parentNode.removeChild(el);
  //   }
  // } else {
  //   throw new Error(`请设置操作权限标签值`);
  // }
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles;
    const permissionRoles = value;

    const hasRole = roles.some(role => {
      return permissionRoles.includes(role);
    });

    if (!hasRole) {
      return false;
    }
    return true;
  } else {
    console.error(`need roles! Like checkRole="['admin','editor']"`);
    return false;
  }
}
