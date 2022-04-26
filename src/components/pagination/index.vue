<!--
 * @Author: 小周
 * @Date: 2022-03-09 17:09:58
 * @LastEditors: 小周
 * @LastEditTime: 2022-03-10 15:48:54
 * @Description: 全局分页组件
-->
<template>
  <div :class="{ hidden: props.hidden }" class="pagination-container">
    <el-pagination
      :background="props.background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="props.layout"
      :page-sizes="props.pageSizes"
      :total="props.total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const props = defineProps({
  total: {
    required: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 20
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 50]
    }
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    default: true
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['pagination', 'update:page', 'update:limit'])

const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  }
})

const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  }
})

const handleSizeChange = (val) => {
  emit('pagination', { page: currentPage, limt: val })
}
const handleCurrentChange = (val) => {
  emit('pagination', { page: val, limt: pageSize })
}
</script>
