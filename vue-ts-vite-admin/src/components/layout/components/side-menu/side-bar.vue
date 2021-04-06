<template>
  <div class="side-bar">
    <el-menu
      mode="vertical"
      default-active="home"
      class="scroll-bar width-100-pre height-100-pre overflow-y-auto"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
<!--      <el-submenu index="1">-->
<!--        <template #title>-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span>导航一</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <template #title>分组一</template>-->
<!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="分组2">-->
<!--          <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-submenu index="1-4">-->
<!--          <template #title>选项4</template>-->
<!--          <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="5">-->
<!--        <template #title>-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span>导航一</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <template #title>分组一</template>-->
<!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="分组2">-->
<!--          <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-submenu index="1-4">-->
<!--          <template #title>选项4</template>-->
<!--          <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="2">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <template #title>导航二</template>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3" disabled>-->
<!--        <i class="el-icon-document"></i>-->
<!--        <template #title>导航三</template>-->
<!--      </el-menu-item>-->
      <el-menu-item
        index="home"
        @click="$router.push({name: 'home'})"
      >
        <i class="el-icon-s-home"></i>
        <template #title>首页</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'side-bar',
  setup () {
    const isCollapse = ref(false)

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      isCollapse,
      handleOpen,
      handleClose
    }
  }
})
</script>

<style scoped lang="scss">
  .side-bar {
    height: calc(100% - 50px);
  }
</style>
