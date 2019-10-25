import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
     redirect:{path:"login"}
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    }
  ]
})
