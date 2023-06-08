import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import LoginRegistroView from './views/Login_RegistroView.vue'

const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeView
    },
    {
        path: "/login-registro",
        name: "login-registro",
        component: LoginRegistroView
      }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;