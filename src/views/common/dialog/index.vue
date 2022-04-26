<template>
  <div>
    <el-button
      type="primary"
      @click="handleClick"
      v-hasPermi="['pact:type:remove']"
      >第一种弹框</el-button
    >
    <el-button
      type="warning"
      @click="handleDialogClick"
      v-hasPermi="['pact:type:remove']"
      >第二种弹框</el-button
    >
    <commonDialog v-model:visible="dialogFormVisible" @success="success" />
    <modelDialog v-model="dialogModelVisble" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import commonDialog from './commonDialog.vue'
import modelDialog from './modelDialog.vue'

const dialogFormVisible = ref(false)
const dialogModelVisble = ref(false)

const handleClick = () => {
  dialogFormVisible.value = true
}

const handleDialogClick = () => {
  dialogModelVisble.value = true
}

const success = (e) => {
  console.log(e, '223')
}
</script>

<style lang="scss" scoped></style>
