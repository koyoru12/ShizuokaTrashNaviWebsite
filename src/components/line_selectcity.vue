<template>
    <v-layout>
        <v-flex sm10 offset-sm1>
            <v-card class="my-3 px-3">
                <v-container>
                    <h1>
                        {{ langPack.sub }}
                    </h1>
                    {{ langPack.desc }}
                    <v-divider/>
                    <span v-if="invalidToken" class="text-xs-center d-block py-3">
                        <span class="error--text">
                        {{ langPack.disabled }}
                        </span>
                    </span>
                    <span v-if="!invalidToken">
                        <city-selector v-model="selectedCityId"/>
                        <span class="d-block text-xs-center">
                            <v-btn round large color="primary" class="px-5"
                            :disabled="!selectedCityId" :loading="submitStatus.loading" @click="submit">
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
                    </span>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { City } from '../middlewares/city.js'
import { getMessages } from '../middlewares/lang.js'
import CitySelector from './cityselector'
export default {
    components: {
        CitySelector
    },
    data() {
        return {
            langPack: {},
            selectedCityId: null,
            token: null,
            invalidToken: false,
            submitStatus: {
                loading: false,
                result: null
            },
        }
    },
    methods: {
        async submit() {
            this.submitStatus.loading = true;
            let res = await City.setUserCity(this.selectedCityId, this.token);
            this.submitStatus.loading = false;
            this.submitStatus.result = res;
        },
    },
    async created() {
        this.langPack = getMessages('line_selectcity');
        this.token = this.$route.query.token;
        let res = await City.authenticate(this.token);
        if (!res) {
            this.invalidToken = true;
            return;
        }
    }
}
</script>

