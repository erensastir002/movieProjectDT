import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import TopView from '../views/TopView.vue'
import ComingView from '../views/ComingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  },
   {
      path: '/TopView',
    name: 'TopView',
    component: TopView
  },
  {
    path: '/ComingView',
  name: 'ComingView',
  component: ComingView
}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
