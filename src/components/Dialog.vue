<template>
    <!-- Empty error for inputs -->
            <v-dialog
                v-model="showDialog"
                max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">
                        <slot name="title"></slot>
                    </v-card-title>

                    <v-card-text>
                    <slot name="content"></slot>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="$emit('input', false)"
                    >
                        Agree
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
</template>

<script>
    export default {

        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                showDialog:  this.value 
            }
        },


        methods: {

        }
    }

</script>

<style lang="scss" scoped>

</style>