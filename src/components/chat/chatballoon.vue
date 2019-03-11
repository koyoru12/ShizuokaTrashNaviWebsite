<template>
    <v-layout :justify-end="direction=='right'" :justify-start="direction=='left'">
        <div :class="{'balloon': true, 'left': direction=='left', 'right': direction=='right'}">
            <span :is="typeFromComponent" :message="message"/>
        </div>
    </v-layout>
</template>

<script>
import TextMessage from './textmessage'
import FlexMessage from './flexmessage'
export default {
    props: {
        message: Object,
        direction: String
    },
    computed: {
        typeFromComponent() {
            switch(this.message.type) {
                case 'text':
                return TextMessage;

                case 'flex':
                return FlexMessage;

                default:
                throw new Error('invalid type of' + this.message.type);
            }
        }
    }
}
</script>

<style scoped>
.balloon{
    position: relative;
    display: inline-block;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0.5em 0;
    padding: 7px 10px;
    min-width: 120px;
    max-width: 100%;
    min-height: 2.2em;
    color: #555;
    font-size: 16px;
    border-radius: 10px;
}
.right {
    background: #e0edff;
}
.left {
    background: #1e88e5;
    color: #ffffff;
}
.right:before {
    content: "";
    position: absolute;
    right: -22px;
    transform: rotate(-25deg);
    border: 8px solid transparent;
    border-left: 20px solid #e0edff;
}
.left:before {
    content: "";
    position: absolute;
    left: -22px;
    transform: rotate(25deg);
    border: 8px solid transparent;
    border-right: 20px solid #1e88e5;
}
</style>
