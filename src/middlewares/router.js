import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../components/hero'
import Chat from '../components/chat'
import About from '../components/about'
import Contact from '../components/contact'
import LineSelectCity from '../components/line_selectcity'

Vue.use(VueRouter);

const baseUrl = process.env.VUE_APP_DOCUMENT_ROOT;
const router = new VueRouter({
    base: baseUrl,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            component: Hero
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/line-selectcity',
            component: LineSelectCity
        }
    ]
})

export default router