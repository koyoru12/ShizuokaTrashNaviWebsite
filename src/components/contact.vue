<template>
    <v-layout>
        <v-flex sm8 offset-sm2>
            <v-card class="my-3 px-3">
                <v-container>
                    <h1>
                        Contact
                    </h1>
                    {{ langPack.desc }}
                    <v-text-field type="email" label="Mail" class="mt-3" v-model="models.mail"/>
                    <v-textarea label="*Content" v-model="models.content"/>
                    <span class="d-block text-xs-center">
                        <v-btn round large color="primary" class="px-5 mt-4"
                        @click="submit" :disabled="!canSubmit" :loading="submitStatus.loading">
                        {{ langPack.submit }}
                        </v-btn>
                        <span v-if="submitStatus.result !== null">
                            <span class="caption d-block primary--text" v-if="submitStatus.result">
                                <v-icon size="14px" color="primary">fas fa-check-circle</v-icon>
                                {{ langPack.submitSuccess }}
                            </span>
                            <span class="captioin d-block error--text" v-if="!submitStatus.result">
                                <v-icon size="14px" color="error">fas fa-exclamation-circle</v-icon>
                                {{ langPack.submitFailed }}
                            </span>
                        </span>
                    </span>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'
import { getMessages } from '../middlewares/lang.js'

async function submitForm(body) {
    let endpoint = process.env.VUE_APP_API_SERVER + 'app/contact';
    try {
        await axios.post(endpoint, JSON.stringify(body));
        return true;
    } catch(e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
        }
        return false;
    }
}

export default {
    data() {
        return {
            langPack: {},
            models: {
                mail: '',
                content: ''
            },
            submitStatus: {
                loading: false,
                result: null
            }
        }
    },
    computed: {
        canSubmit() {
            return this.models.content !== ''
        }
    },
    methods: {
        async submit() {
            this.submitStatus.loading = true;
            this.submitStatus.result = await submitForm(this.models);
            this.models.mail = '';
            this.models.content = '';
            this.submitStatus.loading = false;
        }
    },
    created() {
        this.langPack = getMessages('contact');
    }
}
</script>