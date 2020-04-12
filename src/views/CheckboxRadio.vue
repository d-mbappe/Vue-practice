<template>
    <v-container>
        <h1 class="text-center">Check</h1>
        <!-- Check -->
        <div class="container container-c">
            <v-checkbox  v-model="checked" :label="checked ? 'Hide':'Show'"></v-checkbox>
            <span v-if="checked">Hide me</span>
        </div>
        
        <div class="container container-c">
            <v-row justify="start" class="pl-3">
                <v-checkbox  v-model="arrayCheck" value="JS" label="JS" color="indigo" ></v-checkbox>
                <v-checkbox  v-model="arrayCheck" value="Vue" label="Vue" color="orange"></v-checkbox>    
                <v-checkbox  v-model="arrayCheck" value="React" label="React" color="red"></v-checkbox>
            </v-row>
    
            <ul>
                <li v-for="value in arrayCheck" :key="value">{{ value }}</li>
            </ul>
        </div>

        <div class="container container-c">
            <v-radio-group v-model="lang">
                <v-radio value="ru" label="RU" color="red"></v-radio>
                <v-radio value="en" label="EN" color="blue"></v-radio>
                <v-radio value="ua" label="UA" color="orange"></v-radio>
            </v-radio-group>
    
            <p >You have chosen: {{ lang }}</p>
            <p v-if="lang == 'en' ">Thank you very much</p>
            <p v-else-if="lang == 'ru' ">Большое спасибо</p>
            <p v-else-if="lang == 'ua' ">Дуже дякую</p>
        </div>

        <div class="container container-c">
            <v-switch v-model="isDisabled" :label="isDisabled?'Unlock':'Lock'"></v-switch>
            <v-text-field outlined dense  type="text" v-bind:disabled="isDisabled" placeholder="Lock or Unlock"></v-text-field>
        </div>

        <div class="container container-c">
            <v-switch   v-model="colorText" true-value="red" false-value="blue" label="Change color"></v-switch>
            <p v-bind:style="{ color: colorText }"> {{colorText}} </p>
        </div>
        
    </v-container>
</template>

<script>
    export default {
        name:'CheckboxRadio',
        
        data: function() {
            return {
                checked: true,
                arrayCheck: [],
                lang:'',
                isDisabled: true,
                colorText: 'blue',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-c {
        margin: 5px auto;
        width: 50%;
    }
</style>