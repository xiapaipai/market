<template>
  <div id='datail'>
      <datailnavbar class="detailll"></datailnavbar>
      <scroll class="content">
      <detailswiper :topImages="topImages"></detailswiper>
      <detailBaseInfo :goods="goods"/>
      <detailShopInfo :shop="shop"/>
      <detailgoodsInfo :detailInfo="detailInfo"/>   
      </scroll>
        
            
  </div>
</template>

<script>
import datailnavbar from './datailnavbar.vue'
import detailswiper from './detailswiper.vue'
import {getdetail} from '../../network/detail'
import {Goods,Shop} from '../../network/detail'
import detailBaseInfo from './DetailBaseInfo.vue'
import detailShopInfo from './DetailShopInfo.vue'
import scroll from '../../components/common/scroll/scroll.vue'
import detailgoodsInfo  from './DetailGoodsInfo.vue'




export default { 
  name:"datail",
  components:{
    datailnavbar,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailgoodsInfo    
  },
    data(){
      return{
         iid:null,
         topImages:[],
         goods:{},
         shop:{},
         detailInfo:{}
      }

},
  created(){
    this.iid=this.$route.params.iid 
    getdetail(this.iid).then(res => {
      // 1.获取顶部的图片轮播图
      const data = res.result;
      this.topImages =res.result.itemInfo.topImages
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop=new Shop(data.shopInfo)
      this.detailInfo=data.detailInfo

    })
  },
}
</script>

<style scoped>
#datail{
 position: relative;
 z-index: 100; 
 background-color: #ffff;
 height:100vh;
}
.content{
  height: calc(100% - 44px);
  
}
.detailll{
  position: relative;
  z-index: 100;
  background-color: #fff;
}
</style>