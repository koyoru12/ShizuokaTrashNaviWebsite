<template>
<span>
    <v-divider/>
    <v-footer color="white pt-2 pb-2" height="auto">
        <v-flex xs10 offset-xs1>
            <v-layout>
                <v-layout align-center class="caption hidden-sm-and-down">
                    <a href="https://www.smallnight.net" class="px-3" v-html="credit"/>
                    <router-link to="/about" class="px-3">
                        {{languagePack.about}}
                    </router-link>
                    <router-link to="/contact" class="px-3">
                        {{languagePack.contact}}
                    </router-link>
                </v-layout>
                <v-flex class="text-xs-center">
                    <v-btn class="mx-3" icon :key="index" v-for="(sns, index) in snsLinks"
                    :href="sns.link" target="_blank"
                    >
                        <v-icon size="24px">
                            {{sns.icon}}
                        </v-icon>
                    </v-btn>
                    <v-layout column class="hidden-md-and-up">
                        <router-link to="/about" class="py-1">
                            {{languagePack.about}}
                        </router-link>
                        <router-link to="/contact" class="py-1">
                            {{languagePack.contact}}
                        </router-link>
                        <a href="https://www.smallnight.net" class="py-1" v-html="credit"/>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-footer>
</span>
</template>

<script>
import { getMessages } from '../middlewares/lang.js'
export default {
    data() {
        return {
            languagePack: {},
            snsLinks: [
                {
                    icon: 'fab fa-line',
                    link: "https://timeline.line.me/social-plugin/share?url=https://shizuoka-trash-navi.smallnight.net/"
                },
                {
                    icon: 'fab fa-twitter',
                    link: "https://twitter.com/share?url=https://shizuoka-trash-navi.smallnight.net/"
                },
                {
                    icon: 'fab fa-facebook',
                    link: "https://www.facebook.com/sharer/sharer.php?u=https://shizuoka-trash-navi.smallnight.net/"
                }
            ],
        }
    },
    computed: {
        credit() {
            return `&copy;2018-${new Date().getFullYear()} SmallNight`
        }
    },
    created() {
        this.languagePack = getMessages('footer');
    }
}
</script>

<style>

</style>
