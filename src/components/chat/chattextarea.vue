<template>
    <v-footer fixed color="transparent">
        <v-flex>
            <v-card color="white" class="pb-3">
                <v-layout justify-center row align-center>
                        <v-btn icon color="primary white--text" @click="isShowMenu=!isShowMenu">+</v-btn>

                        <chat-menu
                        v-show="isShowMenu"
                        class="flex xs10"/>
                        <input
                        v-show="!isShowMenu"
                        v-model="textareaModel" class="flex xs10 px-3 input"
                        placeholder="ペットボトルの捨て方"
                        :disabled="loading"
                        @keydown="handleKeyDown"
                        />
                </v-layout>
            </v-card>
        </v-flex>
    </v-footer>
</template>

<script>
import ChatMenu from './chatmenu'
export default {
    props: {
        loading: Boolean
    },
    components: {
        ChatMenu
    },
    data() {
        return {
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
