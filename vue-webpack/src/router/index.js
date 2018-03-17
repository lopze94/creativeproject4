import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Menu from '@/components/Menu'
import Location from '@/components/Location'

// index.js or main.js


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/culturabakery',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    }
  ]
})
