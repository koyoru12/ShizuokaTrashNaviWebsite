<template>
    <v-layout fill-height align-center>
        <v-flex xs10 offset-xs1>
            <v-layout column align-center justify-center>
                    <img src="../assets/01.png" width="200" class="pt-3">
                    <a href="https://line.me/R/ti/p/%40rse7694l" class="pb-4">
                        <img height="36" border="0" alt="友だち追加" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png">
                    </a>
                    <span class="display-3 font-weight-bold hidden-sm-and-down">
                        {{languagePack.heading}}
                    </span>
                    <span class="display-1 font-weight-bold hidden-md-and-up">
                        {{languagePack.heading}}
                    </span>
                    <span class="subheading">
                        {{languagePack.subheading}}
                    </span>
                    <router-link to='/chat'>
                        <v-btn large round color="text-none mt-3 mb-4 primary white--text px-5">{{languagePack.startWithWeb}}</v-btn>
                    </router-link>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { getMessages } from '../middlewares/lang.js'
export default {
    data() {
        return {
            languagePack: {}
        }
    },
    created() {
        this.languagePack = getMessages('hero');
    }
}
</script>

