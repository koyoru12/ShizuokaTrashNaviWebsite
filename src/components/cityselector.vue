<template>
    <span>
        <span v-if="loading" class="text-xs-center d-block px-3 py-4">
            <v-progress-circular :size="50" color="primary" indeterminate/>
        </span>
        <v-radio-group v-if="!loading" v-model="selectedCityId">
            <v-radio :key="index" v-for="(city, index) in cityList"
            :value="city.id" color="primary">
                <template v-slot:label>
                    <span class="defaultText--text">
                    {{city.name}}
                    </span>
                </template>
            </v-radio>
        </v-radio-group>
    </span>
</template>

<script>
import { City } from '../middlewares/city.js'
export default {
    props: {
        value: String
    },
    data() {
        return {
            loading: false,
            cityList: []
        }
    },
    computed: {
        selectedCityId: {
            get() {
                return this.value;
            },
            set(newVal) {
                if (this.value !== newVal) this.$emit('input', newVal);
            }
        }
    },
    async created() {
        this.loading = true;
        let res = await City.fetchValidCities();
        if (res) {
            this.cityList = res;
        }
        this.loading = false;
    }
}
</script>
