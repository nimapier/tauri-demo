<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const list = ref( [
          {
            icon: 'Microphone',
            check: true,
            title: '语音权限',
            subtitle: '紧急情况，录音取证'
          },
          {
            icon: 'MapLocation',
            check: true,
            title: '位置权限',
            subtitle: '提高定位准确度，出行更效率'
          },
          {
            icon: 'Camera',
            check: true,
            title: '相机权限',
            subtitle: '提供拍照上传头像服务'
          },
          {
            icon: 'Phone',
            check: true,
            title: '电话权限',
            subtitle: '方便司乘实时沟通，保障优质服务'
          },
          {
            icon: 'Document',
            check: true,
            title: '存储权限',
            subtitle: '访问本地照片，更改用户头像'
          },
        ]
)
const submit = () => {
  window.open('https://www.wjx.cn/vm/ru994zW.aspx# ')
}
</script>

<template>
  <div class="container">
    <div v-for="item in list" class="list">
      <el-icon size="30"><component :is="item.icon"/></el-icon>
      <div class="title-container">
        <div class="title">{{item.title}}</div>
        <div class="subtitle">{{item.subtitle}}</div>
      </div>
      <el-switch
  v-model="item.check"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="btn-container">
      <el-button type="primary" @click="submit">点击提交</el-button>
    </div>
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
body {
  height: 100%;
  background: #eeeeff;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
}
.list {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
i {
  font-size: 30px;
  margin-right: 10px
}
.title-container {
  text-align: left;
/*   margin-right: 60px; */
}
.el-switch {
  margin-left: auto;
}
.btn-container {
  display: flex;
  justify-content: space-around;
}
</style>
