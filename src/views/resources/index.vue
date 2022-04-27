<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="Date" width="180" />
      <el-table-column label="数据标签">
        <template #default="scope">
          <template v-if="scope.row.tagNameList[0] != null">
            <template v-for="item in scope.row.tagNameList">
              <el-tag
                v-if="item != null"
                :key="item"
                type="success"
                class="tag"
                >{{ item }}</el-tag
              >
            </template>
          </template>

          <el-tag v-else type="warning">暂无标签</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="titleProper" label="标题" />
      <el-table-column label="更新时间">
        <template #default="scope">
          {{ $filters.dayjs(scope.row.updateTime).format('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="warning" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      v-show="total > 0"
      :total="total"
      v-model:page="page.pageNum"
      v-model:limit="page.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup>
import { getSourceResList } from '@/api/sourceInfo'
import { getCurrentInstance, reactive, ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const { proxy } = getCurrentInstance()

const tableData = ref([])

const total = ref(0)
const page = reactive({
  pageNum: 1,
  pageSize: 10
})

const getList = () => {
  getSourceResList(page).then((res) => {
    let data = res.data
    if (data.code == 1 && res.data) {
      console.log(data, '121010')
      tableData.value = data.data.data
      total.value = data.data.totalNum
    }
  })
}
// getList()

const handleEdit = (row) => {
  console.log(row, '212')
}
const handleDelete = (row) => {
  console.log(row, '删除')
  ElMessageBox.confirm('确定要删除当前记录吗', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      proxy.$msg.getMessage('success', '删除成功')
    })
    .catch(() => {
      proxy.$msg.getMessage('success', '取消删除')
    })
}
</script>

<style lang="scss" scoped></style>
