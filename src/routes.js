import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';
import App from "./App.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import RequestAQuoteForm from "@/components/RequestAQuoteForm.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import CareerComponent from "@/components/CareerComponent.vue";
import FleetComponent from "@/components/FleetComponent.vue";


const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeComponent
    },
    {
        name: "Team",
        path: "/team",
        component: TeamComponent
    },
    {
        name: "RequestToQuoteForm",
        path: "/quote",
        component: RequestAQuoteForm
    },
    {
        name: "Contact",
        path: "/contact",
        component: ContactComponent
    },
    {
        name: "Career",
        path: "/career",
        component: CareerComponent
    },
    {
        name: "Fleet",
        path: "/fleet",
        component: FleetComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router