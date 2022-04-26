<template>
  <el-dialog title="描述" :model-value="modelValue">
    <h1>弹框内容</h1>
    <template #footer>
      <el-button @click="close">取消</el-button>
      <el-button type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const close = () => {
  emits('update:modelValue', false)
}
</script>

<style lang="scss" scoped></style>
