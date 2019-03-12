<template>
    <v-app class="grey--text text--darken-4">
        <app-header/>
        <router-view/>
        <app-footer v-show="isShowFooter"/>
    </v-app>
</template>

<script>
import Index from './components/index'
import AppHeader from './components/header'
import Hero from './components/hero'
import AppFooter from './components/footer'
import colors from 'vuetify/es5/util/colors'

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
    },
    computed: {
        isShowFooter() {
            return this.$route.path !== '/chat'
        }
    },
    created() {
        this.$vuetify.theme.primary = colors.blue.darken1;
    }
}
</script>
