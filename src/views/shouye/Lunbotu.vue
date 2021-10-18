<template>
  <Swiper>
  <SwiperItem v-for="(item,index) in banners" :key="index">  
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>   
  </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from '../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../components/common/swiper/Swiperitem.vue'
export default {
  props:{
banners:{
  type:Array,
  default(){
    return[]
  }
}
  },
  components:{
    Swiper,
    SwiperItem
  }

}
</script>


<style>

</style>