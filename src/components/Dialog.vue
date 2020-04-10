<template>
    <!-- Empty error for inputs -->
            <v-dialog
                v-model="show"
                max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">Empty value</v-card-title>

                    <v-card-text>
                    Fill in all the information about the product.
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="show = false"
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
            show: {
                type: Boolean,
                default: false
            }
        },



        // methods: {
        //     change(){
        //     this.show = !this.show
        // }
        // }
        // watch: { 
        //     show: function(newVal, oldVal) { // watch it
        //     console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        //     },
        // },
        // data: function() {
        //     return {
        //         show: this.show,

        //     }
        // },

    }

</script>

<style lang="scss" scoped>

</style>