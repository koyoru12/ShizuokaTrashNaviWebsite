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
                    <span v-if="loading.city" class="text-xs-center d-block px-3 py-4">
                        <v-progress-circular :size="50" color="primary" indeterminate/>
                    </span>
                    <v-radio-group v-model="radioModel" v-if="!loading.city">
                        <v-radio :key="index" v-for="(city, index) in cityList" 
                        :value="city.name" color="primary">
                            <template v-slot:label>
                                <span class="defaultText--text">
                                {{city.name}}
                                </span>
                            </template>
                        </v-radio>
                    </v-radio-group>
                    <span class="d-block text-xs-center">
                        <v-btn round large color="primary" class="px-5"
                        :disabled="!radioModel" :loading="loading.submit" @click="submit">
                            {{ langPack.submit }}
                        </v-btn>
                        <span v-if="submitResult.show">
                            <span class="caption d-block primary--text" v-if="submitResult.success">
                                <v-icon size="14px" color="primary">fas fa-check-circle</v-icon>
                                {{ langPack.submitSuccess }}
                            </span>
                            <span class="captioin d-block error--text" v-if="!submitResult.success">
                                <v-icon size="14px" color="error">fas fa-exclamation-circle</v-icon>
                                {{ langPack.submitError }}
                            </span>
                        </span>
                    </span>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
// ToDo:
// 登録しました！失敗しました！の表示
// created()時にトークンの認証要求をして、認証できない場合は404ページに飛ばす
// 認証要求はrouterでやってもいいかも
import { City } from '../middlewares/city.js'
import { getMessages } from '../middlewares/lang.js'
export default {
    data() {
        return {
            langPack: {},
            cityList: [],
            radioModel: null,
            token: null,
            loading: {
                city: false,
                submit: false
            },
            submitResult: {
                show: false,
                success: false
            }
        }
    },
    methods: {
        async submit() {
            this.loading.submit = true;            
            let res = await City.changeUserCity(1, 1);
            this.loading.submit = false;
            this.submitResult.show = true;
            this.submitResult.success = res;
        },
    },
    async created() {
        this.loading.city = true;
        this.langPack = getMessages('line_selectcity');
        let res = await City.fetchValidCities();
        if (res) {
            this.cityList = res;
        }
        this.loading.city = false;
        this.token = this.$route.query.token;
    }
}
</script>

<style>

</style>
