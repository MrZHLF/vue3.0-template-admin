import request from '@/utils/request.js'
// 获取所有信息接入抓取内容展示
export function getSourceResList(page, data = {}) {
  return request({
    url: `/radioem/m/sourceRes/pageList/${page.pageNum}/${page.pageSize}`,
    method: 'post',
    data
  })
}
