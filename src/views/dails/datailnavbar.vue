<template>
  <div>  
    <navbar>
      <div slot="left" class="back" @click="backcli">
        <img src="./back.svg" alt="">
      </div>
          <div slot="mid" class="title">
            <div v-for="(item,index) in titles" :key="index" class="titleitem"
            :class="{active:index===curryindex}" @click="ben(index)">{{item}}</div>
          </div>
   </navbar>
</div>
</template>

<script>
import navbar from '../../components/common/navbar/navbar.vue'

export default {
  components:{
    navbar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      curryindex:0
    }
  },
  methods:{
    ben(index){
      this.curryindex=index

    },
    backcli(){
     this.$router.back()
    }
  }
}
</script>

<style>
.title{
  display: flex;
  font-size: 13px;
}
.titleitem{
  flex:1 ;
}
.active{
  color:rgb(236, 122, 141)
}
.back img{
  margin-top:10px;

}
</style>