<template>
  <div class="app-container">
    <el-form :model="form">
      <el-form-item label="输入框">
        <el-input v-model="form.text" placeholder="请输入文本框内容"></el-input>
      </el-form-item>
      <el-form-item label="单选框">
        <el-radio-group v-model="form.radio">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
          <el-radio :label="2">未知</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="多选框">
        <el-checkbox-group v-model="form.checkList">
          <el-checkbox label="前端" />
          <el-checkbox label="Java" />
          <el-checkbox label="PHP" />
          <el-checkbox label="Node.js" />
          <el-checkbox label="Python" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="下拉框">
        <el-select v-model="form.address" placeholder="请选择地区" size="large">
          <el-option
            v-for="item in addressOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-time-picker
          v-model="form.time"
          arrow-control
          placeholder="请选择时间"
        >
        </el-time-picker>
      </el-form-item>
      <el-form-item label="日期选择">
        <el-date-picker v-model="form.day" type="date" placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="级联选择">
        <el-cascader
          clearable
          v-model="form.cascader"
          :options="cascaderOptions"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch
          v-model="form.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({})
const addressOptions = ref([
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'zhengzhou', label: '郑州' }
])
const cascaderOptions = ref([
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      }
    ]
  }
])
</script>

<style lang="scss" scoped>
.app-container {
  display: block;
  width: 800px;
  margin: 0 auto;
}
</style>
