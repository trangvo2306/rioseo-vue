import Vue from 'vue'
import Router from 'vue-router'
import StoreLocator from '@/components/StoreLocator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StoreLocator',
      component: StoreLocator
    }
  ]
})
