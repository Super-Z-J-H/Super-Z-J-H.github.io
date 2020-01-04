import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeRecommend from '../views/HomeRecommend.vue'
import HomeHot from '../views/HomeHot.vue'
import HomeSearch from '../views/HomeSearch.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/recommend',
    children:[
      {
      path:'/recommend',
      name:'recommend',
      component:HomeRecommend
    },
    {
      path:'/hot',
      name:'homehot',
      component:HomeHot
    },
    {
      path:'/search',
      name:'homesearch',
      component:HomeSearch
    },
  ]
  },
  {
    path: '/Playlist',
    name: 'Playlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlist.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
