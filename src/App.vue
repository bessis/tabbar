<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "@/components/mainTabbar";

export default {
  name: "App",
  components: {
    mainTabbar,
  },
};
</script>


<style lang="less">
</style>
