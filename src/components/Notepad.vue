<template>
    <v-container>
        <!-- Notepad -->
        <div class="container container-c text-center">
            <h1 class="text-center">Notepad</h1>
            <p for="notepad">Enter your note</p>

            <div class="note-wrapper d-flex justify-center">
                <div class="note-list" >
                    <h4>Your Notes</h4>
                    <v-list >
                        <v-list-item v-for="(note,index) in noteList" :key="index" class="pb-1">
                            <v-list-item-icon>
                                <v-icon color="blue">touch_app</v-icon>
                            </v-list-item-icon>
                            <a href="" @click.prevent="showNote(index)">{{note.noteDate}}</a> 
                            <v-btn small class="error ml-5" @click="removeNote(index)"> <v-icon>remove</v-icon> </v-btn>
                        </v-list-item>
                    </v-list>
                    
                </div>

                <div class="notepad   ma-5">
                    
                        <v-textarea outlined rounded label="Notepad" background-color="white" cols="40" rows="5" placeholder="Enter new note"
                        v-model="oneNote">
                        
                        </v-textarea>
                        <div class="">
                            <v-btn class="success " @click="addNote()">Add note</v-btn>
                            <v-btn class="error" @click="oneNote = '' "><v-icon>clear</v-icon></v-btn>
                        </div>
                    
                </div>
            </div> 
        </div> 
    </v-container>
</template>

<script>
    export default {
        name: 'Notepad',

        data: function() {
            return {
                noteList:[
                    {noteText: 'Call to Shakhtar', noteDate: '19:12, 15 марта 2020 год'},
                    {noteText: 'Call to Arsenal', noteDate: '19:15, 14 марта 2020 год'},
                    {noteText: 'Call to Arsenal', noteDate: '19:15, 13 марта 2020 год'},
                    {noteText: 'Call to Arsenal', noteDate: '19:15, 12 марта 2020 год'},
                ],

                oneNote:'',
            }
        },

        methods: {
            // Notepad
        addNote: function(value) {
            let fMonth;

            if (this.oneNote == '') {
                alert ('The entry cannot be empty');
            } else {
                value = this.oneNote;
                let currDate = new Date(),
                    Year = currDate.getFullYear(),
                    Month = currDate.getMonth(),
                    Day = currDate.getDate(),
                    Hour = currDate.getHours(),
                    Minutes = currDate.getMinutes();

                    if(Minutes < 10) {
                        Minutes = '0' + Minutes; 
                    }

                switch (Month)
                {
                case 0: fMonth="января"; break;
                case 1: fMonth="февраля"; break;
                case 2: fMonth="марта"; break;
                case 3: fMonth="апреля"; break;
                case 4: fMonth="мае"; break;
                case 5: fMonth="июня"; break;
                case 6: fMonth="июля"; break;
                case 7: fMonth="августа"; break;
                case 8: fMonth="сентября"; break;
                case 9: fMonth="октября"; break;
                case 10: fMonth="ноября"; break;
                case 11: fMonth="декабря"; break;
                }

                this.noteList.push({
                    noteText: value,
                    noteDate: Hour + ':' + Minutes + ', ' +  Day + ' ' + fMonth + ' '  +  Year + ' год',
                });

                this.oneNote = ''
            }

        },

        removeNote: function(index) {
            this.noteList.splice( index, 1);
            this.oneNote = ''

        },

        showNote: function(index) {
            let oldNote = this.noteList[index].noteText;
            this.oneNote = 'Запись: ' + oldNote;
        },
        }
    }
</script>

<style lang="scss" scoped>
.v-list-item {
    a {
        text-decoration: none;
        color: #5a5a5a;

        &:hover {
            color:#c4e1f8;
        }
    }
}
</style>