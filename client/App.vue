<template lang="html">
  <div id="root">
    <nav-header></nav-header>
    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/nav-header.vue'

export default {
  components: {
    NavHeader
  },
}
</script>

<style>
  html, 
  body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  #root {
    min-width: 980px;
    min-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  .layout {
    flex: 1;
    position: relative;
  }
</style>

