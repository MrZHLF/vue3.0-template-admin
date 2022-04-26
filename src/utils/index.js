import { ElNotification , ElMessage } from 'element-plus'


/**
 * 
 * @param {string} type 类型 success warning info error
 * @param {string} desc 描述 
 * @description ElMessage弹框提示
 */
export function getMessage(type, desc) {
  ElMessage({
    type: type,
    message: desc,
  })
}


/**
 * 
 * @param {string} title 提示
 * @param {string} desc 描述
 * @param {string} type 类型  success warning info error
 * @description ElNotification弹框通知
 */
export function getNotification(title="提示", desc, type) {
  ElNotification ({
    title: title,
    message: desc,
    type: type,
    duration: 1500,
  })
}
