<template>
    <v-layout>
        <v-flex sm8 offset-sm2>
            <v-card class="my-3 px-3">
                <v-container>
                    <span v-html="messages"/>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { getMessages } from '../middlewares/lang.js'
import marked from 'marked'
export default {
    data() {
        return {
            languagePack: {},
        }
    },
    computed: {
        messages() {
            if (!this.languagePack) return '';
            return marked(this.languagePack.content, {
                breaks: true
            });
        }
    },
    created() {
        this.languagePack = getMessages('about');
    }
}
</script>
