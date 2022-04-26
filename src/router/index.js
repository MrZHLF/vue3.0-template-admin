import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"

import RoleListRouter from "./modules/a.js"
import UserManageRouter from "./modules/b.js"
// 私有路由
export const asyncRoutes = [...RoleListRouter, ...UserManageRouter]
export const constRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: '/dashboard',
  },
  {
    path: "/dashboard",
    component: Layout,
    meta: {
      title: "系统首页",
      icon: "dashboard",
      roles: ["embroadcast:first:page"]
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/views/home"),
        
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
    import( "@/views/login/index.vue")
  },
  {
    path: "/401",
    name: "401",
    component: () => import( "@/views/error/401.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import( "@/views/error/404.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constRoutes
})

export default router
