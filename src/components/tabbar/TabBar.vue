<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang=less scoped>
#tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
}
</style>