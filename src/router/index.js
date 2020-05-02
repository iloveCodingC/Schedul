import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../views/mahome/Home')
const Appointment = () =>import('../views/maappointment/Appointment')
const Order = () =>import('../views/maorder/Order')
const Profile = () =>import('../views/mapofile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home

    },
    {
        path:'/order',
        component:Order

    },
    {
        path:'/appointment',
        component:Appointment

    },
    {
        path:'/profile',
        component:Profile

    },

]

const router = new VueRouter({
    routes,
})
 export default router