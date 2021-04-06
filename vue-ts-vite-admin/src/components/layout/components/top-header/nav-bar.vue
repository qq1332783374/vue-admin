<template>
  <div class="top-header-nav-bar">
    <div class="top-header-nav-bar__left display-flex align-items-center">
      <div class="top-header-nav-bar__collapse">
        <i class="el-icon-s-fold"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-header-nav-bar__right display-flex align-items-center">
      <ul class="top-header-nav-bar__tools display-flex">
        <li class="top-header-nav-bar__tools-item">
          <i class="el-icon-s-tools"></i>
        </li>
        <li class="top-header-nav-bar__tools-item">
          <i class="el-icon-edit"></i>
        </li>
      </ul>
      <div class="top-header-nav-bar__user display-flex align-items-center">
        <span class="top-header-nav-bar__user-name">用户名</span>
        <el-avatar
          size="medium"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'top-header-nav-bar'
})
</script>

<style scoped lang="scss">
  .top-header-nav-bar {
    &__collapse {
      font-size: 24px;
      margin-right: 20px;
      color: #666;
    }

    &__user {
      color: #666;

      &-name {
        margin-right: 10px;
      }
    }

    &__tools {
      margin-right: 20px;
      list-style: none;

      &-item {
        color: #666666;
        margin-right: 10px;
      }
    }
  }
</style>
