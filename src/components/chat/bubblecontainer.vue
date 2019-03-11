<template>
    <span>
        <BoxComponent :context="context.body"/>
    </span>
</template>

<script>
import BoxComponent from './boxcomponent'
export default {
    props: {
        context: Object
    },
    components: {
        BoxComponent
    }
}
</script>
