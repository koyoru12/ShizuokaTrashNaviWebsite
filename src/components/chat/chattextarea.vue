<template>
    <v-footer fixed color="transparent">
        <v-flex>
            <v-card color="white" class="pb-3">
                <v-layout justify-center row align-center>
                        <v-btn icon color="primary white--text" @click="isShowMenu=!isShowMenu">
                            <v-icon size="16">fas fa-cog</v-icon>
                        </v-btn>
                        <chat-config v-model="isShowMenu"/>
                        <input
                        v-model="textareaModel" class="flex xs10 px-3 input"
                        :placeholder="langPack.placeholder"
                        :disabled="loading"
                        @keydown="handleKeyDown"
                        />
                </v-layout>
            </v-card>
        </v-flex>
    </v-footer>
</template>

<script>
import ChatConfig from './chatconfig'
import { getMessages } from '../../middlewares/lang.js'
export default {
    props: {
        loading: Boolean
    },
    components: {
        ChatConfig
    },
    data() {
        return {
            langPack: {},
            textareaModel: '',
            isShowMenu: false
        }
    },
    methods: {
        handleKeyDown(e) {
            if (e.keyCode === 13) {
                e.preventDefault()
                var message = this.textareaModel;
                this.textareaModel = '';
                this.$emit('sendMessage', message);
            }
        }
    },
    created() {
        this.langPack = getMessages('chat');
    }
}
</script>

<style scoped>
.input {
    padding: 0px;
    height: 2.5em;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 20px;
}
</style>
