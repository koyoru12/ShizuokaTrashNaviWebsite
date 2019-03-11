<template>
<span>
    <v-divider/>
    <v-footer color="white pt-2 pb-2" height="auto">
        <v-flex class="text-xs-center">
            <v-layout column>
                <span>
                    <v-btn class="mx-3" icon :key="index" v-for="(link, index) in links"
                    href="https://timeline.line.me/social-plugin/share?url=http%3A%2F%2Fexample.com%2F"
                    >
                        <v-icon size="24px">
                            {{link}}
                        </v-icon>
                    </v-btn>
                </span>
                <span class="caption">
                    免責/クレジット
                    &copy;2018 SmallNight
                </span>
            </v-layout>
        </v-flex>
    </v-footer>
</span>
</template>

<script>
export default {
    data() {
        return {
            snsLinks: [
                {
                    icon: 'fab fa-line',
                    link: "https://timeline.line.me/social-plugin/share?url=http%3A%2F%2Fexample.com%2F"
                },
                {
                    icon: 'fab fa-twitter',
                    link: "https://timeline.line.me/social-plugin/share?url=http%3A%2F%2Fexample.com%2F"
                }
            ],
            links: ['fab fa-line', 'fab fa-twitter', 'fab fa-facebook']
        }
    }
}
</script>

<style>

</style>
