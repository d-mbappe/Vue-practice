<template>

    <v-container>
        <!-- Filters -->
        <h1 class="text-center">Filters</h1>
        <div class="container container-c ">
            <v-text-field label="First letter uppercase" v-model="messageF"></v-text-field>
            <p> <b>Result:</b> {{messageF | capitalizeWords}} </p>
        </div>

        <div class="container container-c">
            <v-text-field label="Date" v-model="dateF"></v-text-field>
            <p> <b>Result:</b> {{dateF | formatDate}} </p>
        </div>

        <div class="container container-c">
            <v-text-field label="Spliting" v-model="numberF"></v-text-field>
            <p> <b>Result:</b> {{numberF | numFormat}} </p>
        </div>
    </v-container>
</template>

<script>
    export default {

        
        name: 'Filters',

        data: function() {
            return {
                messageF: 'what a pleasant morning',
                dateF: '2020-03-13',
                numberF: '15454895',
            }
        },

        filters: {
            uppercase: function(str) {
                return str.toUpperCase();
            },
            capitalizeWords: function(str) {
                str = str.split(' ');
                var newStr =  [];
                for (let i=0; i<str.length; i++){
                    newStr.push(str[i].substr(0,1).toUpperCase() + str[i].slice(1) ) ;
                }
                
                return newStr.join(' ') ;      
            },
            formatDate: function(str) {
                str = str.split('-').reverse().join('.')
                return str;
            },
            // numFormat: function(str) {
            //     str = str.split('').reverse();

            //     let newNumber = [],
            //         count = 0;

            //     for (let i=0; i<str.length; i++){
            //         count++;

            //         if(count < 3) {
            //             newNumber.push(str[i]);
            //         } else {
            //             count = 0;
            //             newNumber.push(str[i] + ' ');
            //         }
            //     }
            //     return newNumber.join('').split('').reverse().join('');
            // },
    },
    }
</script>

<style lang="scss" scoped>
    .container-c {
        margin: 5px auto;
        width: 50%;
    }
</style>