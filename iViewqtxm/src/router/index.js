import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gqstsye from '@/components/Gqstsye'
import Gqstzbo from '@/components/Gqstzbo'
import Gqstfx from '@/components/Gqstfx'
import Gqstwd from '@/components/Gqstwd'
import denglu from '@/components/denglu'
import zhuche from '@/components/zhuche'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/Gqstsye',
    	component:Gqstsye
    },{
    	path:'/Gqstzbo',
    	component:Gqstzbo
    },{
    		path:'/Gqstfx',
    	component:Gqstfx
    },{
    		path:'/Gqstwd',
    	component:Gqstwd
    },{
    	path:'/denglu',
    	component:denglu
    },
    {
    	path:'/zhuche',
    	component:zhuche
    }
  ]
})
