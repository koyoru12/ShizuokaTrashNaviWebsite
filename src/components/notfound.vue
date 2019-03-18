<template>
    <v-layout>
        <v-flex sm8 offset-sm2>
            <v-card class="my-3 px-3">
                <v-container>
                    <span class="d-block title py-3">
                        404 Not Found
                    </span>
                    {{langPack.desc}}
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { getMessages } from '../middlewares/lang.js'
export default {
    data() {
        return {
            langPack: {}
        }
    },
    created() {
        this.langPack = getMessages('notfound');
    }
}
</script>