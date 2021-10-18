<template>
   <tabar> 
<tabaritem path="/shouye">
<img slot="img" src="../assets/img/tabbar/home.svg" alt="">
<img slot="huoyue" src="../assets/img/tabbar/home_active.svg" alt="">
<div slot="text">首页</div>
</tabaritem>  
<tabaritem path="/fenlei">
  <img slot="img" src="../assets/img/tabbar/category.svg" alt="">
<img slot="huoyue" src="../assets/img/tabbar/category_active.svg" alt="">
<div slot="text">分类</div>
</tabaritem>
<tabaritem path="/gouwuche">
  <img slot="img" src="../assets/img/tabbar/cart.svg" alt="">
<img slot="huoyue" src="../assets/img/tabbar/cart_active.svg" alt="">
<div slot="text">购物车</div>
</tabaritem>
<tabaritem path="/wode">
  <img slot="img" src="../assets/img/tabbar/profile.svg" alt="">
<img slot="huoyue" src="../assets/img/tabbar/profile_active.svg" alt="">

<div slot="text">我的</div>
</tabaritem>
  </tabar>
</template>

<script>
import tabar from './common/tabbar/tabar.vue'
import tabaritem from './common/tabbar/tabaritem.vue'
export default {
  components:{
    tabar,
    tabaritem
  }

}
</script>

<style>

</style>