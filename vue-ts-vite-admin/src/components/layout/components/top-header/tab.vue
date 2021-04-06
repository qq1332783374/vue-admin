<template>
  <div class="top-header-tab">
    <el-tabs
      class="top-header-tabs"
      v-model="activeName"
      @tab-click="handleClick"
      closable
      type="card"
    >
      <el-tab-pane
        label="首页"
        name="home"
        class="top-header-tab-pane"
      />
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'top-header-tab',
  setup () {
    const activeName = ref('home')
    const router = useRouter()

    const handleClick = (tab, event) => {
      console.log('tab', tab.paneName);
      console.log('event', event);
      router.push({
        name: tab.paneName
      })
    }

    return {
      activeName,
      handleClick
    }
  }
})
</script>

<style lang="scss">
  .top-header-tab {

    .el-tabs--card>.el-tabs__header .el-tabs__nav,
    .el-tabs--card>.el-tabs__header .el-tabs__item,
    .el-tabs--card>.el-tabs__header {
      border: none;
    }

    .el-tabs__header {
      margin: 0;
      padding: 5px 0;
    }

    .el-tabs__item {
      background-color: #fff;
      font-size: 12px;
      border-radius: 4px;
      margin: 0 5px;
      border: none;
      height: 30px;
      line-height: 30px;
    }

    .el-tabs__nav-next, .el-tabs__nav-prev {
      line-height: 30px;
      font-size: 12px;
      background: #fff;
      margin: 0 5px;
      border-radius: 4px;
    }
  }
</style>
