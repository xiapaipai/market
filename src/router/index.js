import Vue from 'vue'
import VueRouter from 'vue-router'
const Shouye=()=>import('../views/shouye/Shouye')
const Fenlei=()=>import('../views/fenlei/Fenlei')
const Gouwuche=()=>import('../views/gouwuche/Gouwuche')
const Wode=()=>import('../views/wode/Wode')
const datail=()=>import('../views/dails/datail')


//1.安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes =[
  {
      path:'',
      redirect:'/shouye'
  },
  {
     path:'/shouye',
     component:Shouye 
  },
  {
     path:'/fenlei',
     component:Fenlei
  },
  {
     path:'/gouwuche',
     component:Gouwuche
  },
  {
     path:'/wode',
     component:Wode 
  },
  {
   path:'/datail/:iid',
   component:datail 
},
]
const router=new VueRouter({
  routes,
  mode:'history'
})
//3导出router
export default router