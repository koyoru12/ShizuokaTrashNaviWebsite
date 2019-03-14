<template>
    <v-layout>
        <v-flex xs10 offset-xs1 pb-5 mb-5>
            <balloon :key="index" v-for="(message, index) in getChatLogs()"
            :message="message.message"
            :direction="message.direction"/>
        </v-flex>
        <v-flex pt-5>
            <chat-textarea :loading="isLoading" @sendMessage="sendMessage"/>
        </v-flex>
    </v-layout>
</template>

<script>
import ChatService from '../middlewares/chat.js'
import { TextMessage } from './chat/models/messages.js'
import ChatTextarea from './chat/chattextarea'
import Balloon from './chat/chatballoon'

export default {
    components: {
        ChatTextarea,
        Balloon,
    },
    computed: {
        isLoading() {
            return ChatService.loading;            
        }
    },
    methods: {
        async sendMessage(message) {
            if (message === '') return;
            this.waitForResponse = true;
            message = new TextMessage(message);
            let responseMessage = await ChatService.sendMessage(message);
            this.waitForResponse = false;
        },
        getChatLogs() {
            return ChatService.getChatLogs();
        }
    },
    created() {
        ChatService.on('chatLogChanged', () => {
            this.$forceUpdate();
        })
    }
}
</script>

<style>

</style>
