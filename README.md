# 使用 vue3.2+element-plus 开发一套后台管理系统

- 采用 vue3.0 最新语法开发一套开箱即用后台管理系统，集成路由权限和按钮权限，通过根据后台返回获取权限码进行路由匹备

- 公共分页直接在组件使用

```js
<pagination
    v-show="total>0"
    :total="total"
    v-model:page="page.pageNum"
    v-model:limit="page.pageSize"
    @pagination="接口列表"
  />
```

- 日期过滤

```js
$filters.dayjs(scope.row.updateTime).format('YYYY-MM-DD')
```

- vue3.2 全局挂载从 protoType 更改为 config.globalProperties

```js
import { getMessage, getNotification } from './utils/index'
app.config.globalProperties.$msg = {
  getMessage,
  getNotification
}

组件使用
const { proxy } = getCurrentInstance()
proxy.$msg.getMessage('success', '更新成功')
```

- 按钮权限

```
<el-button v-hasPermi="['pact:type:remove']">按钮</el-button>
```
