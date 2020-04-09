<template>
    <v-container>
        <!-- Test -->
        <div class="container container-c">
            <h1 class="text-center">Test</h1>
            <ul v-for="(questionItem,index) in testQuestions" :key="index">
                <li> {{questionItem.question}} </li>
                <p v-if="questionItem.checkedAnswer == true"  style="margin: 0; color: green">Правильный ответ </p>
                <p v-if="questionItem.checkedAnswer == false" style="margin: 0; color: red ">Неправильный ответ </p>
            <input с
                outlined 
                class="userAnswer "
                
                :disabled="questionItem.checkedAnswer"
                @keyup.enter="checkingAnswer(index)">
                
            </ul>
        </div>

        <!-- Test (Radio BTN) -->
        <div class="container container-c">
            <h1 class="text-center">Test Radio</h1>
            <div>
                <div class="question-item" v-for="(questionI,index) in radioTest" :key="index">
                
                    
                    <p v-if="questionI.selectedAnswer == '' " style="text-decoration: underline"> 
                        {{questionI.question}}
                    </p>
                    <p v-else
                    v-bind:style= " (questionI.selectedAnswer == radioTest[index].right) ? rightAnswerRadio : wrongAnswerRadio"> 
                        {{questionI.question}}
                        </p>
                    
    
                    <template v-for="(answer, index) in radioTest[index].answers">
                        <v-radio
                        v-bind:value="index + 1"
                        v-model="questionI.selectedAnswer"
                        style="padding: 5px;"
                        :key="index"
                        ></v-radio> 
                        <label style="padding-right: 20px;" :key="answer"> {{answer}}</label>
                    </template>
    
                </div>
            </div>
        </div>


        <!-- Test (Multi Check) -->
        <div class="container container-c">
            <h1 class="text-center">Test Multi Check</h1>
            <h5> {{MultiCheckTest[index].question}} </h5>           
                <template v-for="(answerMulti, index) in MultiCheckTest[index].answers" >
                            <v-checkbox
                            v-bind:value="index + 1"
                            v-model="answersArray"
                            :key="index"
                            ></v-checkbox>
                        
                        <label for="" style="padding-right: 20px;" :key="answerMulti"> {{answerMulti}}</label>
                        
                </template>
            
    
            <a v-if="index < MultiCheckTest.length -1" href="" @click.prevent="all">Следующий вопрос -> {{index + 2}}</a>
            <a v-if="index == MultiCheckTest.length -1" href="#" @click.prevent="all">Показать pезультат </a> 
            <!-- <p>  {{answersArray}}</p> -->
            <p> <b> Правильных ответов:</b> {{rightMultiAnswers}}</p>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'Test',

        data: function() {
            return {
                testQuestions: [
            {
                question: 'Вопрос 1',
                answer: 'Ответ 1',
                checkedAnswer: null,
            },
            {
                question: 'Вопрос 2',
                answer: 'Ответ 2',
                checkedAnswer: null,

            },
            {
                question: 'Вопрос 3',
                answer: 'Ответ 3',
                checkedAnswer: null,

            },
        ],

        // rightAnswer: {
        //     outline : '2px solid green',
        //     color: '#ccc'
        // },

        // wrongAnswer: {
        //     outline : '2px solid red'
        // },
        rightAnswer: 'success',
        wrongAnswer: 'error',

        defaultStyle: {
            border: 'none'
        },

        // Radio Test
        radioTest: [
            {
                question: 'Вопрос 1',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 3, // номер правильного ответа
                selectedAnswer: ''
            
            },
            {
                question: 'Вопрос 2',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 1, // номер правильного ответа
                selectedAnswer: ''


            },
            {
                question: 'Вопрос 3',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right: 5, // номер правильного ответа
                selectedAnswer: ''

            },
        ],

        rightAnswerRadio: {
            color: 'green'
        },

        wrongAnswerRadio: {
            color: 'red'
        },

        defaultRadio: {
            color: 'black'
        },

        // Test Multi Check
        MultiCheckTest: [
            {
                question: 'Вопрос 1',
                answers: [
                    'Ответ 1',
                    'Ответ 2',
                    'Ответ 3',
                    'Ответ 4',
                    'Ответ 5',
                ],
                right:[1,3] , // номер правильного ответа
            },
            {
                question: 'Вопрос 2',
                answers: [
                    'Ответ 1--',
                    'Ответ 2--',
                    'Ответ 3--',
                    'Ответ 4--',
                    'Ответ 5--',
                ],
                right: [2], // номер правильного ответа          

            },

            {
                question: 'Вопрос 3',
                answers: [
                    'Ответ 1--',
                    'Ответ 2--',
                    'Ответ 3--',
                    'Ответ 4--',
                    'Ответ 5--',
                ],
                right: [2,5], // номер правильного ответа
            },
        ],

        answersArray:[],
        index: 0 ,
        rightMultiAnswers: 0,
            }
        },

        methods: {
            checkingAnswer: function(index) {
            let userAnswer = document.getElementsByClassName('userAnswer')[index],
                answer = this.testQuestions[index].answer;
            
            if (answer == userAnswer.value){
                this.testQuestions[index].checkedAnswer = true;
                
            } else {
                this.testQuestions[index].checkedAnswer = false;
                userAnswer.value = ''
            }
            
        },

        nextQuestion: function() {
            let length = this.MultiCheckTest.length;

            if(this.index < length -1) {
                this.index += 1;
            } else {
                alert('Правильных ответов: ' + this.rightMultiAnswers)
            }
            this.answersArray = []
        },

        checkingMultiAnswer: function() {

            let currQuestion = this.MultiCheckTest[this.index];
            let right = 0;

            for(let i=0; i<this.answersArray.length; i++) {

                if ( currQuestion.right.includes(this.answersArray[i]) ) {
                    right += 1;
                }
                console.log(currQuestion.right.includes(this.answersArray[i]))
            }
            
            if (right == currQuestion.right.length) {
                this.rightMultiAnswers += 1;
            }
        },

        all: function() {
            this.checkingMultiAnswer();
            this.nextQuestion();
        },
        }
    }
</script>

<style lang="scss" scoped>
.container-c {
    margin: 5px auto;
    width: 50%;
    }
</style>