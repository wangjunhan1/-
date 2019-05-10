import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/city'
import First from '@/pages/detail/components/0001'
import Second from '@/pages/detail/components/0002'
import Third from '@/pages/detail/components/0003'
import Wode from '@/pages/wode/wode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/detail/components/0001',
      name: 'First',
      component: First
    }, {
      path: '/detail/components/0002',
      name: 'Second',
      component: Second
    }, {
      path: '/detail/components/0003',
      name: 'Third',
      component: Third
    }, {
      path: '/wode/signed',
      name: 'wode',
      component: Wode
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
