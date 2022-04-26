<template>
  <el-dialog
    v-model="visible"
    title="提示"
    width="30%"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <el-form :model="form" :rules="rules" ref="ruleFormRef">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="radio">
        <el-radio-group v-model="form.radio">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="性别" prop="address">
        <el-select v-model="form.address" placeholder="请选择城市">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close(ruleFormRef)">取消</el-button>
        <el-button type="primary" @click="submit(ruleFormRef)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineProps, computed, defineEmits, reactive } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const form = ref({})
const options = ref([
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'zhengzhou', label: '郑州' }
])

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  radio: [{ required: true, message: '请选择性别', trigger: 'blur' }],
  address: [{ required: true, message: '请选择城市', trigger: 'blur' }]
})

console.log(props, 'props')
const emit = defineEmits(['update:visible', 'success'])
const visibleDialog = computed({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  }
})

const ruleFormRef = ref(null)

const close = (formName) => {
  console.log('关闭')
  formName.resetFields()
  emit('update:visible', false)
}
const submit = (formName) => {
  console.log('保存')
  formName.validate((valid) => {
    if (!valid) return
    console.log(ruleFormRef, 'ruleFormRef')
    emit('success', form.value)
    emit('update:visible', false)
  })
}
</script>

<style lang="scss" scoped></style>
