<template>
 <div class="tabconcle">
  <div v-for='(item,index) in titles' :key='index' 
  class='tabconitem' :class="{active:index === cree}" @click='btn(index)'>
     <span>{{item}}</span>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },data(){
    return{
      cree:0
    }
  },
  methods:{
    btn(index){
      this.cree=index
      this.$emit('tabClick',index)
    }
  }

}
</script>

<style>
.tabconcle{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabconitem{
  flex: 1;
}
.tabconitem span{
  padding: 5px;
}
.active{
  color: rgb(207, 101, 119);
 
}
.active span{
   border-bottom: 3px solid pink;
}
</style>