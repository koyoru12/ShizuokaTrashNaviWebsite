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
                        このページは無効か、有効期限が切れています。
                        </span>
                    </span>
                    <span v-if="!invalidToken">
                        <span v-if="loading.city" class="text-xs-center d-block px-3 py-4">
                            <v-progress-circular :size="50" color="primary" indeterminate/>
                        </span>
                        <v-radio-group v-model="selectedCityId" v-if="!loading.city">
                            <v-radio :key="index" v-for="(city, index) in cityList" 
                            :value="city.id" color="primary">
                                <template v-slot:label>
                                    <span class="defaultText--text">
                                    {{city.name}}
                                    </span>
                                </template>
                            </v-radio>
                        </v-radio-group>
                        <span class="d-block text-xs-center">
                            <v-btn round large color="primary" class="px-5"
                            :disabled="!selectedCityId" :loading="loading.submit" @click="submit">
                                {{ langPack.submit }}
                            </v-btn>
                            <span v-if="submitResult !== null">
                                <span class="caption d-block primary--text" v-if="submitResult">
                                    <v-icon size="14px" color="primary">fas fa-check-circle</v-icon>
                                    {{ langPack.submitSuccess }}
                                </span>
                                <span class="captioin d-block error--text" v-if="!submitResult">
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
export default {
    data() {
        return {
            langPack: {},
            cityList: [],
            selectedCityId: null,
            token: null,
            invalidToken: false,
            loading: {
                city: false,
                submit: false
            },
            submitResult: null
        }
    },
    methods: {
        async submit() {
            this.loading.submit = true;
            let res = await City.changeUserCity(this.selectedCityId, this.token);
            this.loading.submit = false;
            this.submitResult = res;
        },
    },
    async created() {
        this.langPack = getMessages('line_selectcity');
        this.loading.city = true;
        this.token = this.$route.query.token;
        let res = await City.authenticate(this.token);
        if (!res) {
            this.invalidToken = true;
            return;
        }
        res = await City.fetchValidCities();
        if (res) {
            this.cityList = res;
        }
        this.loading.city = false;
    }
}
</script>

