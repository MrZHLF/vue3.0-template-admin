import Layout from '@/layout/index.vue'

export default [
  {
    path: '/resources',
    component: Layout,
    redirect: '/resources/list',
    children: [
      {
        path: '/resources/list',
        name: 'list',
        component: () => import('@/views/resources'),
        meta: {
          title: '表格展示',
          icon: 'article',
          roles: ['embroadcast:infoinsert:page']
        }
      }
    ]
  }
]
