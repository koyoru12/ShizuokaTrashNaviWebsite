<template>
    <v-dialog v-model="dialogActivator" max-width="500px">
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-btn icon @click="dialogActivator=false">
                    <v-icon size="18">close</v-icon>
                </v-btn>
                <span class="title">
                    Config
               </span>
               <v-spacer/>
                    {{ langPack.sub }}
            </v-toolbar>
            <v-container class="pt-0 pb-3">
                <city-selector v-model="selectedCityId"/>
                <v-divider/>
                <span class="d-block text-xs-center">
                    <v-btn color="primary" round :disabled="selectedCityId===''" @click="submit">
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
    </v-dialog>
</template>

<script>
import CitySelector from '../cityselector'
import { City } from '../../middlewares/city.js'
import { getMessages } from '../../middlewares/lang.js'
export default {
    props: {
        value: Boolean
    },
    components: {
        CitySelector
    },
    data() {
        return {
            selectedCityId: '',
            langPack: null,
            submitStatus: {
                result: null
            }
        }
    },
    computed: {
        dialogActivator: {
            get() {
                return this.value;
            },
            set(newVal) {
                if (this.value !== newVal) this.$emit('input', newVal);
            }
        }
    },
    watch: {
        value() {
            if (this.value) {
                this.init();
            }
        }
    },
    methods: {
        init() {
            this.selectedCityId = City.fetchUserCity();
            this.submitStatus.result = null;
        },
        submit() {
            City.setUserCity(this.selectedCityId);
            this.submitStatus.result = true;
        }
    },
    created() {
        this.langPack = getMessages('chatconfig');
    }
}
</script>