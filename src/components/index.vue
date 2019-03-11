<template>
        <v-flex>
                <v-toolbar class="blue darken-1 white--text">しずおかごみ出しNavi</v-toolbar>
                <v-flex md6 sm8 xs12 offset-md3 offset-xs0 offset-sm2>
                    <v-card>
                        <v-radio-group v-model="radios" class="d-block">
                        <v-list>
                            <v-subheader>
                                ごみ分別情報を検索する市町村を変更できます
                            </v-subheader>
                            <v-list-tile @click="radios='a'">
                                <v-radio value="a">
                                </v-radio>
                                静岡市
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile @click="radios='b'">
                                <v-radio value="b">
                                </v-radio>
                                浜松市
                            </v-list-tile>
                        </v-list>
                        </v-radio-group>
                        <span class="d-block text-xs-center pb-2">
                            <v-btn large depressed round color="blue darken-1 white--text px-5">地域をセットする</v-btn>
                        </span>
                  </v-card>
                </v-flex>
        </v-flex>
</template>

<script>
export default {
    data() {
        return {
            radios: ''
        }
    }
}
</script>

<style>

</style>
