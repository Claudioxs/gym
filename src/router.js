import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import LoginRegistroView from './views/LoginView.vue'
import RegistroView from './views/RegistroView.vue'
import PerfilView from './views/PerfilUsuarioView.vue'
import EntrenadorView from './views/EntrenadorView.vue';
import AlumnoView from './views/AlumnoView.vue';
import RutinaView from './views/RutinaView.vue';
import RutinaUserView from './views/RutinaUserView.vue'


const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/login",
        name: "login",
        component: LoginRegistroView
    },
    {
        path: "/register",
        name: "register",
        component: RegistroView
    },
    {
        path: "/perfil",
        name: "perfil",
        component: PerfilView 
    },
    {
        path: "/entrenador",
        name: "admin",
        component: EntrenadorView
    },
    {
        path: "/entrenador/alumno",
        name: "alumno",
        component: AlumnoView
    },
    {
        path: "/agregarRutinaUser",
        name: "agregarRutinaUser",
        component: RutinaUserView,
        props: (route) => ({
            parametro: route.query.parametro,
          })
    },
    {
        path: "/entrenador/:id/alumno/agregarRutina",
        name: "agregarRutina",
        component: RutinaView
    }


]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;