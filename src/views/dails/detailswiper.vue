<template>
    <swiper class="uuu">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </swiper>
</template>
<script>
import Swiper from '../../components/common/swiper/Swiper'
import SwiperItem from '../../components/common/swiper/Swiperitem'

export default {
  components:{ 
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      }
    }
  }

}
</script>

<style scoped>
.uuu{
  height: 300px;
  overflow: hidden;
}

</style>