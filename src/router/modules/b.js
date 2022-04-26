import Layout from "@/layout/index.vue"

export default [
  {
    path: "/common",
    component: Layout,
    redirect: "/common/dialog",
    meta: {
      title: "常用组件展示",
      icon: "personnel",
      roles: ["common:page"]
    },
    children: [
      {
        path: "/common/dialog",
        name: "dialog",
        component: () => import("@/views/common/dialog"),
        meta: {
          title: "弹框组件",
          icon: "personnel-manage",
          roles: ["common:page"]
        }
      },
      {
        path: "/common/form",
        name: "form",
        component: () => import("@/views/common/form"),
        meta: {
          title: "表单组件",
          icon: "personnel-manage",
          roles: ["common:page"]
        }
      }
    ]
  }
]
