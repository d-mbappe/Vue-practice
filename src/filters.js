import Vue from "vue"

Vue.filter('numFormat', function (str) { 
    str = String(str).split('').reverse();

                let newNumber = [],
                    count = 0;

                for (let i=0; i<str.length; i++){
                    count++;

                    if(count < 3) {
                        newNumber.push(str[i]);
                    } else {
                        count = 0;
                        newNumber.push(str[i] + ' ');
                    }
                }
                return newNumber.join('').split('').reverse().join('');
    })