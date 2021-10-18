<template>  
<div id='home'>
  <tab class='aaaa'><div slot="mid">购物车</div></tab> 
   <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" 
   :pull-up-load="true"
   @pullingUP="loadMore">
  <Lunbotu :banners="banners"/> 
  <Yuijian :recommends="recommends"/>
  <tupian/>
  <tabconcle class='tabconcle' :titles="['流行','新款','精选']" 
  @tabClick="tabClick"/>
   <goodlist :goods="showGoods"></goodlist>
   </scroll>
  <backtop @click.native="btn" v-show="isShowBackTop"/>
  
    

  </div>
</template>

<script>
import tab from '../../components/common/navbar/navbar.vue'
import { getHomeMultidata,gethomegoods } from '../../network/home'
import Lunbotu from './Lunbotu.vue'
import Yuijian from './Yuijian.vue'
import Tupian from './Tupian.vue'
import Tabconcle from '../../components/content/tabconcle.vue'
import goodlist from '../../components/content/goods/goodslist.vue'
import scroll from '../../components/common/scroll/scroll.vue'
import backtop from '../../components/content/backtop/backtop.vue' 
export default {
name: 'App',
  components:{
    tab,
    Lunbotu,
    Yuijian,
    Tupian,
    Tabconcle,
    goodlist,
    scroll,
    backtop

  },
  data(){
    return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},

        },
        currentType:'pop',
        isShowBackTop:false 
    }
  },
  computed:{
  showGoods(){
    return this.goods[this.currentType].list
  }
  },
  activated(){
  //  this.$refs.scroll.scrollTo(0,this.saveY,0)

  },
  deactivated(){
       this.saveY=this.$refs.scroll.scroll.y
  },
  created(){
           this.getHomeMultidata()
           this.gethomegoods('pop')
           this.gethomegoods('new')
           this.gethomegoods('sell')

     
  },
  methods:{
    /**
     * 事件监听方法
     * 
     */
    tabClick(index){
     switch (index){
       case 0:
         this.currentType='pop'
         break
       case 1:
         this.currentType='new'
         break
       case 2:
         this.currentType='sell'

     }

    },
    btn(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowBackTop = (-position.y)>1000
    },
    loadMore(){
         this.gethomegoods(this.currentType)
        //  this.$$refs.scroll.scroll.refresh()
    },
    
    /**
     * 网络请求方法
     */
    
    getHomeMultidata(){
          getHomeMultidata().then(res=>{
           this.banners=res.data.banner.list
           this.recommends = res.data.recommend.list
         })
    },
    gethomegoods(type){
      const page =this.goods[type].page+1
          gethomegoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          this.$refs.scroll.scroll.finshPullUP
         })
    }

                
  }

}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
 .aaaa{
 background-color: var(--color-tint);
 color:#fff;
 position: fixed;
 left:0;
 right: 0;
 top: 0;
 z-index: 9;
}
.tabconcle{
  position: sticky;
  top: 44px; 
  z-index: 9;
  }
  .content{
  /* height: calc(100%-93%); 
  overflow: hidden;  */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
 

</style>