<template>
  <div id="tabar"> 
    <slot></slot>        
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#tabar{
  display:flex;
  background-color: #f6f6f6;
  position:fixed;
  left: 0;
  right: 0;
  bottom:0;
  box-shadow: 0px -1px 1px rgba(100,100,100,.1);
  z-index:99;
}

</style>