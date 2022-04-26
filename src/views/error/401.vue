<template>
  <div class="error-page">
    <div class="errPage-container">
      <el-button icon="el-icon-arrow-left" type="danger" @click="goBack"
        >返回</el-button
      >
      <el-row>
        <el-col :span="12">
          <h1 class="text-jumbo">Oops!</h1>
          <h2>你没有权限去该页面</h2>
          <h6>请联系管理员</h6>
        </el-col>
        <el-col :span="12">
          <img :src="error" alt="" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const error = ref(require('./../../assets/401.089007e7.gif'))
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    h1 {
      margin: 0.67em 0;
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    h6 {
      margin-top: 30px;
    }
  }
}
</style>
