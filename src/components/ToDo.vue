<template>
    <v-container>
        <!-- ToDo -->
        <div class="container container-c text-center">
            <h1 class="text-center"> To Do</h1>
            <p>To change an issue, click on it 2 times. Press Enter to confirm</p>

            <div class="d-flex justify-center">
                <v-list  dense color="#fff" width="70%">
                    <v-list-item  v-for="(task,index) in taskList" :key="index" > 
                        <div class="d-flex align-center task-change">
                            <v-checkbox color="blue" v-if="!task.checkedTask"  v-model="task.checkedTask" class="task-check__checkbox"></v-checkbox>
                            <span v-if="!task.changeTask" v-bind:style="task.checkedTask ? styleObject : '' " @dblclick="editTask(index)" >
                                {{task.text}} 
                            </span>                        
                            <v-text-field  v-if="task.changeTask" v-model="task.text" @keyup.enter="editTask(index)" ></v-text-field>
                        </div>
                        <div><v-btn @click="deleteTask(index)"  class="error ml-3"><v-icon>clear</v-icon></v-btn></div>
                    </v-list-item>
                </v-list>
            </div>

            <div class="d-flex mt-5 task-input">
                <v-text-field rounded outlined dense background-color="#fff" color="blue" label="New Task"    v-model="newTask" @keyup.enter="addTask()" ></v-text-field> 
                <v-btn @click="addTask" class="success ml-7" >
                    Add <v-icon>add</v-icon>
                </v-btn>
            </div>            
        </div>

        <!-- Empty error for inputs -->
        <div v-if="showDialog">
            <Dialog v-model="showDialog">
                <p slot="title">Empty value</p>
                <p slot="content">This field cannot be empty</p>
            </Dialog>
        </div>
    </v-container>
</template>

<script>
import Dialog from './Dialog'
    export default {
        name: 'ToDo',
        components: {Dialog},

        data: function() {
            return {
                taskList: [
                    {text:'First - Lorem ipsum dolor sit amet, consectetur adipisicing elit.', checkedTask: false, changeTask: false},
                    {text:'Second - Lorem ipsum dolor sit amet, consectetur adipisicing elit.', checkedTask: false, changeTask: false},
                    {text:'Third - Lorem ipsum dolor sit amet, consectetur adipisicing elit.', checkedTask: false, changeTask: false},
                ],
                styleObject: {
                    'text-decoration': 'line-through',
                    opacity: '.7'
                },
                newTask:'',
                changeTask: false,

                showDialog: false // for component Dialog
            }
        },

        methods: {
            change: function(value) {
                this.showDialog = value; // for component Dialog
            },

            addTask: function(value) {
                if(value == '') {
                    value = this.newTask;
                    this.taskList.push({
                    text: value,
                    checkedTask:false,
                    changeTask: false
                    }),
                    this.newTask = ''
                } else {
                    this.showDialog = ! this.showDialog  // for component Dialog
                }
            },

            deleteTask: function(index) {
                this.taskList.splice(index, 1)
            },
            
            editTask: function(index) {
                this.taskList[index].changeTask = !this.taskList[index].changeTask;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .task-change {
        width: 90%;
    }

    .task-input {
        margin: 0 auto;
        width: 70%;
    }
</style>