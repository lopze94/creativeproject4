import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Menu from '@/components/Menu'
import Local from '@/components/Local'
import Orden from '@/components/Orden'

// index.js or main.js


Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/local',
      name: 'Local',
      component: Local
    },
    {
      path: '/orden',
      name: 'Orden',
      component: Orden
    }
  ]
})
