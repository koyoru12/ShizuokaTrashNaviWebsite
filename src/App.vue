<template>
    <v-app class="grey--text text--darken-4">
        <app-header/>
        <router-view/>
        <!--
        <app-footer/>
        -->
    </v-app>
</template>

<script>
import Index from './components/index'
import AppHeader from './components/header'
import Hero from './components/hero'
import AppFooter from './components/footer'

export default {
    name: 'App',
    components: {
        Index,
        AppHeader,
        AppFooter,
        Hero
    },
    data () {
        return {
        //
        }
    }   
}
</script>
