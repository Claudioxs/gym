import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import EntrenadorView from './views/EntrenadorView.vue';
import AlumnoView from './views/AlumnoView.vue';
import RutinaView from './views/RutinaView.vue';

const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeView
    },
    {
        path: "/entrenador",
        name: "admin",
        component: EntrenadorView
    },
    {
        path: "/entrenador/:id/alumno",
        name: "alumno",
        component: AlumnoView
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