<template>
    <v-footer fixed color="transparent">
        <v-flex xs12>
            <v-card color="white" class="pb-3">
                <v-layout justify-center row align-center>
                        <v-btn icon color="primary white--text">+</v-btn>
                        <input
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
export default {
    props: {
        loading: Boolean
    },
    data() {
        return {
            textareaModel: ''
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
