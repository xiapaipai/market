<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>

    </div>
  </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
 props:{
  probeType:{
    type:Number,
    default:0
  },
  pullUpLoad:{
    type:Boolean,
    default:false
  }
 },
data(){
    return{
       scroll:null,
    }
  },
 mounted(){
 this.scroll = new BSscroll(this.$refs.wrapper,{
 probeType:this.probeType,
 pullUpLoad:this.pullUpload,
 click:true,
 mouseWheel:true,
 observeDOM:true
 })
//  监听滚动区域
this.scroll.on('scroll',(position)=>{
  this.$emit('scroll',position)

})
// 监听上拉加载更多 
this.scroll.on('pullingUp',()=>{
 this.$emit('pullingUP')
})

 }
}
</script>

<style>

</style>