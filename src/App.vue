<template>
<div id='app'>
  <keep-alive exclude="datail"><router-view></router-view></keep-alive>
   
   <minrabbar></minrabbar>
</div>
  
</template>

<script>
import minrabbar from './components/minrabbar.vue'
export default {
  name: 'App',
  components:{
    minrabbar,
  }
  
}
</script>

<style>
@import "./assets/css/base.css";

</style>
