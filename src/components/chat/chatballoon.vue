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
    min-height: 2.2em;
    color: #555;
    font-size: 16px;
    border-radius: 10px;
}
.right {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    width: auto;
    min-width: 150px;
    max-width: 500px;
    background: #e0edff;
    padding: 10px 20px;
    z-index: 0;
}
.left {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    width: auto;
    min-width: 150px;
    max-width: 500px;
    background: #1e88e5;
    padding: 10px 20px;
    z-index: 0;
    color: #ffffff;
}
.right:before {
    border-style: solid;
    border-width: 10px 0px 10px 20px;
    border-color: transparent transparent transparent #e0edff;
    content: "";
    position: absolute;
    top: 12px;
    right: -16px;
    display: block;
    width: 0px;
    height: 0px;
    z-index: 0;
}
.left:before {
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent #1e88e5 transparent transparent;
    content: "";
    position: absolute;
    top: 12px;
    left: -16px;
    display: block;
    width: 0px;
    height: 0px;
    z-index: 0;
}
</style>
