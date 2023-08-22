<template>
  <div>
    <tab-bar>
      <tabbar-item path="/home" activeColor="#ee9ca7">
        <img
          src="../assets/img/tabbar/home_active.svg"
          class="icon"
          slot="item_icon_cur"
        />
        <img
          src="../assets/img/tabbar/home.svg"
          class="icon"
          slot="slot_icon"
        />
        <div slot="slot_txt">首页</div>
      </tabbar-item>

      <tabbar-item path="/category" activeColor="#ee9ca7">
        <img
          src="../assets/img/tabbar/category_active.svg"
          class="icon"
          slot="item_icon_cur"
        />
        <img
          src="../assets/img/tabbar/category.svg"
          class="icon"
          slot="slot_icon"
        />
        <div slot="slot_txt">分类</div>
      </tabbar-item>

      <tabbar-item path="/cart" activeColor="#ee9ca7">
        <img
          src="../assets/img/tabbar/shopcart_active.svg"
          class="icon"
          slot="item_icon_cur"
        />
        <img
          src="../assets/img/tabbar/shopcart.svg"
          class="icon"
          slot="slot_icon"
        />
        <div slot="slot_txt">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile" activeColor="#ee9ca7">
        <img
          src="../assets/img/tabbar/profile_active.svg"
          class="icon"
          slot="item_icon_cur"
        />
        <img
          src="../assets/img/tabbar/profile.svg"
          class="icon"
          slot="slot_icon"
        />
        <div slot="slot_txt">我的</div>
      </tabbar-item>

    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar"
import tabbarItem from "@/components/tabbar/tabbarItem"

export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    tabbarItem
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang=less scoped>
</style>