<template>
    <span>
        <BubbleContainer :context="message.contents"/>
    </span>
</template>

<script>
import BubbleContainer from './bubblecontainer'
export default {
    props: {
        message: Object
    },
    components: {
        BubbleContainer
    }
}
</script>
