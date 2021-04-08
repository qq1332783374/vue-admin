<template>
  <div class="side-menu-logo display-flex align-items-center">
    <el-image
      class="side-menu-logo__img"
      alt="logo"
      :src="LogoPng"
    />
    <div
      v-if="!isCollapse"
      class="side-menu-logo__name"
    >
      Vue3 Admin
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import { useStore } from 'vuex'
import LogoPng from '@assets/images/logo.png'

export default defineComponent({
  name: 'side-menu-logo',
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.Common.isCollapse)

    return {
      LogoPng,
      isCollapse
    }
  }
})
</script>

<style scoped lang="scss">
  .side-menu-logo {
    height: 50px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #f2f2f2;
    cursor: pointer;

    &__img {
      width: 45px;
      height: 45px;
    }

    &__name {
      width: calc(100% - 45px);
      text-align: center;
    }
  }
</style>
