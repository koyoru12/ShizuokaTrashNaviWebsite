<template>
    <div @click="handleClick"
    :style="'color: ' + getColor + ';'
          + 'fontSize:' + getFontSize + ';'"
    :class="{pointer: hasAction, 'my-1': true}">{{context.text}}</div>
</template>

<script>
import ChatService from '../../middlewares/chat.js'
import { MessageAction } from './models/actions.js'
import { Settings } from './models/settings.js'

export default {
    props: {
        context: Object
    },
    computed: {
        getColor() {
            return !!this.context.color ? this.context.color : 'inherit';
        },
        getFontSize() {
            if (!!this.context.size && Settings.fontSize[this.context.size]) {
                return Settings.fontSize[this.context.size]
            } else {
                return 'inherit';
            }
        },
        hasAction() {
            return !!this.context.action;
        }
    },
    methods: {
        handleClick() {
            if (this.context.action && this.context.action.type !== '') {
                ChatService.emitAction(this.context.action)
            }
        }
    }
}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>