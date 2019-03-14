<template>
    <v-btn round color="primary" @click="handleClick" class="button">
        {{context.action.label}}
    </v-btn>
</template>

<script>
import ChatService from '../../middlewares/chat.js'

export default {
    props: {
        context: Object
    },
    methods: {
        handleClick() {
            ChatService.emitAction(this.context.action)
        }
    }
}
</script>