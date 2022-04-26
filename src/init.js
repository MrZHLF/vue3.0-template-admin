/*
 * @Author: 小周 
 * @Date: 2022-03-Th 05:03:19 
 * @Last Modified by:   小周 
 * @Last Modified time: 2022-03-Th 05:03:19 
 * @ descript 初始化
 */

import * as echarts from 'echarts'

// 导入全局样式
import './styles/index.scss';
// 分页组件
import Pagination from  '@/components/pagination/index.vue'

// 导入 svgIcon
import installIcons from '@/icons'
// 数据过滤
import installFilter from '@/filters'

import permission from './directive/hasPermi.js'

// 方法封装 挂全局
import { getMessage,getNotification } from '@/utils/index'

export default app => {
  installFilter(app)
  installIcons(app)
  permission(app)
  // 分页组件挂载全局
  app.component('Pagination',Pagination)
  // 全局实例
  app.config.globalProperties.$echarts = echarts
  app.config.globalProperties.$msg = {
    getMessage,
    getNotification
  }
}