<template>
  <div class="navbar">
    <div>
      <hamburger class="hamburger-container" />
      <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
    </div>
    <div class="right-menu">
      <screenfull class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span v-if="userInfo" class="user">{{ userInfo.actualName }}</span>
          <el-avatar :size="30" :src="avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout"> 退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Hamburger from '../Hamburger'
import Screenfull from '../Screenfull'
import Breadcrumb from '../Breadcrumb'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

import { rmToken } from '@/utils/store.js'
import { rmUser } from '@/utils/userStore.js'

const store = useStore()
const router = useRouter()
const avatar = ref(require('./../../../assets/avatar.png'))

const userInfo = computed(() => store.getters.userInfo)

const logout = () => {
  // 退出登录
  store.commit('user/SET_LOGININFO', "")
  rmToken()
  rmUser()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 50px;

    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        display: flex;
        align-items: center;
        position: relative;
        .user {
          margin-right: 10px;
        }
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
