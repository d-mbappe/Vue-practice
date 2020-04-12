<template>
    <v-container>
        <!-- Product Basket-->
        <h1>Product Basket <v-icon>shopping_cart</v-icon> </h1> 
        <h3>Click on the cell to edit it</h3>
        
        <v-simple-table class="mt-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price per unit (₽)</th>
                    <th>Count</th>
                    <th>Price (₽)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in productBasket" v-bind:key="index">
                    <td v-if="!product.editing " @click="editName(index)" >{{product.name}} </td>
                    <td v-if="product.editing "> <v-text-field outlined dense clearable rounded type="text" v-model="product.name" v-on:blur="product.editing = false"></v-text-field>  </td>

                    <td v-if="!product.editing " @click="editPrice(index)" >{{product.price}} </td>
                    <td v-if="product.editing "> <v-text-field outlined dense clearable rounded type="text" v-model="product.price" v-on:blur="product.editing = false"></v-text-field> </td>

                    <td v-if="!product.editing " @click="editQuantity(index)" >{{product.quantity}} </td>
                    <td v-if="product.editing "> <v-text-field outlined dense clearable rounded type="text" v-model="product.quantity" v-on:blur="product.editing = false"></v-text-field> </td>
                    
                    <td class="oncePrice"> {{product.quantity*product.price}} </td>
                    <v-btn small class="mt-2"  @click="removeProduct(index)" color="error"> <v-icon>clear</v-icon></v-btn >
                </tr>
            </tbody> 
            <tr>
                <td><v-text-field outlined dense class="productItem" id="name" type="text" label="Name"></v-text-field></td>
                <td><v-text-field outlined dense class="productItem" id="price" type="text" label="Price"></v-text-field></td>
                <td><v-text-field outlined dense class="productItem" id="quant" type="text"  label="Count"></v-text-field></td>
                <v-btn dark  class="ml-4" @click="addProduct()" color="teal">Add <v-icon>add</v-icon></v-btn >
            </tr>
                
            <tr> 
                <th colspan="3" >
                    <v-alert type="success" dense class="mt-4" >
                        <span  class="title">Total:  </span> 
                        <span v-if=" allPrice !== '' "> {{allPrice}} ₽</span>
                    </v-alert>
                </th>
                <td>
                    <v-btn   large color="primary" style="margin-right: 20px;" @click="productPriceClick()" >Sumarize <v-icon>functions</v-icon>
                    </v-btn >
                </td> 
            </tr>
        </v-simple-table>
        <!-- Empty error for inputs -->
        <div v-if="showDialog">
            <Dialog v-model="showDialog">
                <p slot="title">Empty value</p>
                <p slot="content">Fill in all fields for the product</p>
            </Dialog>
        </div>
    
    </v-container>
</template>

<script>
import Dialog from '../components/Dialog'

    export default {
        name:'product-basket',
        components: {Dialog},

        data: function() {
            return {
                t: '11111111111',
                productBasket: [
                    {name: 'Milk', price: 50, quantity: 2, editing:false},
                    {name: 'Meat', price: 250, quantity: 3, editing:false},
                    {name: 'Cheese', price: 180, quantity: 1, editing:false},
                    {name: 'Avocado', price: 120, quantity: 2, editing:false},
                ],
                allPrice: '',
                editingName: false,
                editingPrice: false,
                editingQuantity: false,

                showDialog: false // for component Dialog
            }
        },

        methods: {
            addProduct: function() {
                let name = document.getElementById('name');
                let price = document.getElementById('price');
                let quant = document.getElementById('quant');

                if (name.value != '' && price.value != '' && quant.value != '') {
                    this.productBasket.push({
                        name: name.value,
                        price: price.value,
                        quantity: quant.value,
                        editing:false

                    })

                    name.value = ""; 
                    price.value = "";
                    quant.value = "";
                } else {
                    this.showDialog = !this.showDialog // for component Dialog
                }
            },
            productPriceClick: function() {

                var textElems = document.getElementsByClassName("oncePrice");
                let allPrice = 0;
                for (let i = 0; i < textElems.length; i++) {
                    allPrice = +allPrice + +textElems[i].innerText;
                }
                this.allPrice = this.$options.filters.numFormat(allPrice); // use global filter

            },

            removeProduct: function(index) {
                this.productBasket.splice(index, 1)
            },

            editName: function(index) {
                var basket = this.productBasket;
                basket[index].editing = true;

            },
            editPrice: function(index) {
                var basket = this.productBasket;
                basket[index].editing = true;

            },
            editQuantity: function(index) {
                var basket = this.productBasket;
                basket[index].editing = true;

            },
        }
    }
</script>

<style scoped>
</style>