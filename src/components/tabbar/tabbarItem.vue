<template>
  <div class="tabbar_items" @click="tolink">
    <div class="item_icon_cur" v-if="isActice"><slot name="item_icon_cur"></slot></div>
    <div class="item_icon" v-else><slot name="slot_icon"></slot></div>
    <div class="item_txt" :style="activeStyle"><slot name="slot_txt"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'tabbarItem',
    data(){
      return{}
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'blue'
      }
    },
    methods:{
      tolink(){
        this.$router.replace(this.path);
      }
    },
    computed:{
      //这里监听route.path;根据路径的变化显示当前活跃页面
     
      isActice(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActice ? {color:this.activeColor}:{}
      }
    },
    created(){},
    mounted(){}
 }
</script>

<style lang=less scoped>
  .tabbar_items{
    flex: 1;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .icon{
    width: 24px;
    height: 24px;
  }
</style>