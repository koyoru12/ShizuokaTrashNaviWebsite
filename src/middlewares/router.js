import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../components/hero'
import Chat from '../components/chat'

Vue.use(VueRouter);

const baseUrl = process.env.VUE_APP_DOCUMENT_ROOT;
const router = new VueRouter({
    base: baseUrl,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Hero
        },
        {
            path: '/chat',
            component: Chat
        }
    ]
})

export default router