import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import LoginRegistroView from './views/LoginView.vue'
import RegistroView from './views/RegistroView.vue'
import PerfilView from './views/PerfilUsuarioView.vue'

const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeView
    },
    {
        path: "/login",
        name: "login",
        component: LoginRegistroView
    },
    {
        path: "/registro",
        name: "registro",
        component: RegistroView
    },
    {
        path: "/perfil",
        name: "perfil",
        component: PerfilView 
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;