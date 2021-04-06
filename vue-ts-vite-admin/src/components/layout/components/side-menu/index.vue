<template>
  <div class="side-menu height-100-pre width-100-pre overflow-auto">
    <logo />
    <side-bar />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Logo from './logo.vue'
import SideBar from './side-bar.vue'

export default defineComponent({
  name: 'side-menu',
  components: {
    Logo,
    SideBar
  }
})
</script>
