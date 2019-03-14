<template>
    <span>
        <div :key="index" v-for="(componentObject, index) in context.contents"
         :is="componentFromType(componentObject.type)"
         :context="componentObject"/>
    </span>
</template>

<script>
import MessageComponent from './messagecomponent'
import ButtonComponent from './buttoncomponent'
import SeparatorComponent from './separatorcomponent'
export default {
    props: {
        context: Object
    },
    components: {
        MessageComponent,
        ButtonComponent,
        SeparatorComponent,
    },
    methods: {
        componentFromType(componentType) {
            switch(componentType) {
                case 'text':
                    return MessageComponent;
                    break;
                
                case 'button':
                    return ButtonComponent;
                    break;

                case 'separator':
                    return SeparatorComponent;
                    break;

                default:
                    throw new Error('invalid type of ' + componentType)
            }
        }
    }
}
</script>
