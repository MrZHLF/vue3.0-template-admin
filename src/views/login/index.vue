<!--
 * @Author: 小周
 * @Date: 2022-02-28 15:40:20
 * @LastEditTime: 2022-04-18 11:32:34
 * @LastEditors: 小周
 * @Description: 登录页面
 * @FilePath: \vue3-practice\src\views\login\index.vue
-->
<template>
  <div class="login-container">
    <div class="login-plane">
      <h1 class="title">系统登录</h1>
      <div class="login-plane-form">
        <el-form
          :model="ruleForm"
          :rules="formRules"
          ref="formRef"
          label-width="80px"
        >
          <el-form-item label="用户名:" prop="userName">
            <el-input
              v-model="ruleForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-button @click="submitForm" style="width: 100%" type="primary"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store/index.js'
import { setToken } from '@/utils/store.js'
import { setUser } from '@/utils/userStore.js'

const formRef = ref(null)
const ruleForm = reactive({
  userName: '',
  password: ''
})

// 表单校验
const formRules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const router = useRouter()

// 提交表单
const submitForm = () => {
  const form = unref(formRef)
  if (!form) return
  form.validate((valid) => {
    if (!valid) return
    let loginInfo = {
      tokenInfo: {
        access_token:"xxxxxxx"
      },
      userInfo: {
        actualName: '小周',
        admin: true,
        userId: '1184273454397001728',
        conditionDeptIds: [],
        conditionUserId: null,
        roles: ['管理员'],
        permissions: [
          'embroadcast:first:page',
          'embroadcast:infoinsert:page',
          'userManage:page',
          'common:page',
          'media:object:list',
          'audit:deal:list',
          'sys:employee:list',
          'sys:app:list',
          'sys:tenant:list',
          'pact:type:remove'
        ],
      },
    }
    store.commit('user/SET_LOGININFO', loginInfo)
    setToken(loginInfo.tokenInfo.access_token)
    setUser(loginInfo.userInfo)
    router.push('/')
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  display: flex;
  min-width: 940px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #5794ff;
  box-sizing: border-box;
  .login-plane {
    position: absolute;
    z-index: 9999;
    width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    background-color: #fff;
    transform: translate(-50%, -50%);
    .title {
      display: block;
      text-align: center;
      font-size: 30px;
      padding: 20px 0;
      letter-spacing: 4px;
    }
    &-form {
      padding: 45px 55px;
      box-sizing: border-box;
    }
  }
}
</style>
