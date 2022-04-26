/**
 * 存储数据
 */

 const KEY_ITEM = 'tagsView'
 export const setItem = (KEY_ITEM, value) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(KEY_ITEM, value)
}

/**
 * 获取数据
 */
export const getItem = KEY_ITEM => {
  const data = window.localStorage.getItem(KEY_ITEM)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = KEY_ITEM => {
  window.localStorage.removeItem(KEY_ITEM)
}

/**
 * 删除所有数据
 */
export const removeAllItem = KEY_ITEM => {
  window.localStorage.clear()
}
