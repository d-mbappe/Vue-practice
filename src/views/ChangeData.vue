<template>
    <v-container>
        <v-row>
            <div class="container container-c">
                <product-basket></product-basket>
            </div>
        </v-row>
    </v-container>
</template>

<script>
import ProductBasket from '../components/ProductBasket'

    export default {
        components: {ProductBasket},
    }
</script>

<style scoped>

</style>