<template>
<div class='tabitem' @click="btn">
  <div v-if='!isactive'>
    <slot name='img'></slot>
    </div>
  <div v-else>
    <slot name='huoyue'></slot>
      </div>
  
  
  <div :class="{active:isactive}">
    <slot name='text'></slot>
    </div>
  
  
  </div>
</template>

<script>
export default {
  props:{
      path:String
  },
data(){
  return{
    // isactive:true
  }
},
computed:{
        isactive(){ 
       return this.$route.path.indexOf(this.path) !== -1
        }
},
methods:{
      btn(){
         this.$router.replace(this.path)
      }
}
}
</script>

<style>
.tabitem{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}
.tabitem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color:rgb(236, 136, 153)
}
</style>