<template>
    <v-container  >
        <v-row>
            <v-col cols="6">
                <!-- Filter -->
                <div class="container container-c">
                    <h4>Filter (less than 10)</h4>
                    <ul class="d-flex justify-space-between">
                        <li v-for="item in items" :key="item">{{item}}</li>
                    </ul>
                    <v-btn v-on:click="filter" color="primary">Filter</v-btn>
                </div>

                <!-- Upper -->
                <div class="container container-c">
                    <h4>Upper Case</h4>
                    <p> {{text}} </p>
                    <v-btn v-on:click="toUpperCase" color="primary">Upper</v-btn>
                </div>
                    <!-- Pow -->
                <div class="container container-c">
                    <h4>Square Root</h4>
                        <v-list dense  color="#c4e1f8" >
                            <v-list-item-group  color="indigo">
                                <v-list-item 
                                @click="pow(index)"
                                v-for="(num, index) in nums"
                                :key="index"
                                >
                                <v-list-item-icon>
                                    <v-icon color="blue">touch_app</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title v-text="num"></v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                </div>

                <!-- Enter Age -->
                <div class="container container-c">
                    <h4 > Age: {{age}} </h4>
                    <v-text-field dense height="20px" type="text" id="itemIput" placeholder="Enter your Age" v-model="age"></v-text-field>
                    <p> Вы:
                        <span v-if="age > 0 && age < 18 && age != '' ">подросток</span>
                        <span v-else-if="age >= 18 && age <= 25">молодой человек</span>
                        <span v-else-if="age > 25 && age != '' ">мужчина</span>
                        <span v-else-if="age != '' ">неверные данные</span>
                    </p>
                </div>

                <!-- Toggle -->
                <div class="container container-c">
                    <h4>Show/Hide</h4>
                    <v-fab-transition name="showName"> <p v-if="sName" class="m-0"> {{name}} </p> </v-fab-transition>
                    <v-btn v-on:click="toggle()" color="primary"> {{sName?'Hide':'Show'}} </v-btn>
                </div>

                
            </v-col >
            <v-col cols="6">
                <!--ФИО  -->
                <div class="container container-c">
                    <h4>ФИО</h4>
                    <v-text-field dense type="text" v-model="fio" placeholder="Введи ФИО"></v-text-field>
                    <v-btn color="primary" v-on:click="separate()" >Separate</v-btn>
                    
                    <p>Фамилия: {{firstWord}} </p>
                    <p>Имя: {{secondWord}} </p>
                    <p>Отчество: {{thirdWord}} </p>
                </div>

                <!-- Password -->
                <div class="container container-c">
                    <h4>Password</h4>
                    <v-text-field dense :type="type" class="form" placeholder="Enter password"></v-text-field>
                    <v-btn color="primary" @click="togglePass()"> {{show ? 'Hide': 'Show'}} </v-btn>
                </div>

                <!-- Year -->
                <div class="container container-c">
                    <h4>Year of birth</h4>
                    <v-text-field dense type="text" v-model="year" maxlength="3" placeholder="Enter your Age" ></v-text-field>
                    <p v-if="year != '' ">Ваш год рождения: {{ calcYear(year) }} </p>
                    <p v-else="">Введите возраст...</p>
                </div>
                <!-- Form -->
                <div class="container container-c">
                    <h4>Sum</h4>
                    <v-text-field dense type="text" v-model="num1" placeholder="First number"></v-text-field>
                    <v-text-field dense type="text" v-model="num2" placeholder="Second number"></v-text-field>
                    <v-btn color="primary" v-on:click="calc()">SUM</v-btn>
                    <p>
                        Сумма: {{sum}}
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'SimpleMethods',

        data: function()  {
            
            return {
                items: [1,4,    20,3,40,6,8,],
                text: 'hello beautiful  and amazing world',
                nums: [5,3,4,1,76],
                sName: true,
                name: 'Dan',
                age: '',
                num1: null,
                num2: null,
                sum: 0,
                fio: '',
                firstWord: '',
                secondWord: '',
                thirdWord: '',
                type: 'password',
                show: false,
                year: '',
                }
        },
        
        methods: {
            // Filter
            filter: function() {
                
                this.items = this.items.filter(function(item){
                    if(item>0 && item<10) {
                        return true;
                    } else {
                        return false;
                    }
                })
            },

            // To Upper
            toUpperFirst: function() {
                this.text = this.text[0].toUpperCase() + this.text.slice(1);
            },

            toUpperLast: function(){
                this.text = this.text.slice(0, -1) + this.text.slice(-1).toUpperCase() ;
            },

            toUpperCase: function(){
                this.toUpperFirst();
                this.toUpperLast();
            },

            // Pow
            pow: function(index) {
                let sqrt = this.nums[index] * this.nums[index];
                this.$set(this.nums, index, sqrt) //this.$set - global Vue.set alias
            },

            // Show
            hideName: function() {
                this.sName = false;
            },
            showName: function() {
                this.sName = true;
            },
            // Toggle
            toggle: function() {
                this.sName = !this.sName;
            },
            // Form
            calc: function (){
                this.sum = +this.num1 + +this.num2;
            },
            // Split
            separate: function() {
                let newFio = this.fio.split(' ');
                this.firstWord =  newFio[0];
                this.secondWord =  newFio[1];
                this.thirdWord =  newFio[2];
            },
            // Password
            togglePass: function() {
                this.show = !this.show;
                if(this.show) {
                    this.type = 'text'
                } else {    
                    this.type = 'password'
                }
            },
            // Year
            calcYear: function(year) {
                let currYear = new Date();
                return currYear.getFullYear() - year;
            },
        }
    }
</script>
    
<style lang="scss">

    
</style>