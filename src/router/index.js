import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/components/Home'
import BOQ from '@/components/BOQ'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/boq', name: 'BOQ', component: BOQ },
  ],
  mode: 'history'
})
