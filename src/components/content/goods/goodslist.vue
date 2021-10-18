<template>
  <div class="goods">
    <gooditem v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
    </div>
</template>
<script>
import gooditem from './goodslistitem.vue'
export default {
  components:{
    gooditem
  },
  props:{
    goods:{
      type:Array,
      default(){
          return[]
      }
    }
  }

}
</script>

<style>
 .goods {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 }

</style>