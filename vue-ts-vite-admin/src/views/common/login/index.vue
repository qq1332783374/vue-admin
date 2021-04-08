<template>
  <div class="login">
    <div class="login__context">
      <div class="login__context-item"></div>
      <div class="login__context-item width-100-pre height-100-pre">
        <div class="width-100-pre">
          <h1 class="login__title text-center">Vue Admin</h1>
          <el-form
            label-position="top"
            label-width="80px"
            :model="formQueryData"
          >
            <el-form-item label="用户">
              <el-input v-model="formQueryData.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formQueryData.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="width-100-pre"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'login',
  setup () {
    const formQueryData = ref({
      username: '',
      password: ''
    })

    return {
      formQueryData
    }
  }
})
</script>

<style lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    padding: 10vw;
    display: flex;
    justify-content: center;
    background: #c1ebff;

    &__title {
      color: #666;
      margin-bottom: 10px;
    }

    &__context {
      padding: 10px;
      background-color: #fff;
      width: 820px;
      height: 520px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-shadow: 5px 5px 7px 2px rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(221, 221, 221, 0.25);
      border-radius: 5px;
      transition: all .5s;

      &-item {
        flex: 1;
      }

      &-item:first-child {
        width: 100%;
        height: 100%;
        background: url("@assets/images/login-banner.png") no-repeat center;
        background-size: 90%;
      }

      &-item:last-child {
        padding: 1.823vw;
        display: flex;
        align-items: center;

        .el-form-item__label {
          line-height: normal;
        }
      }

    }

    @media (max-width: 540px) {
      &__context {
        width: 100%;
        height: 350px;
        margin-top: 100px;

        &-item:first-child {
          display: none;
        }
      }
    }
  }
</style>
