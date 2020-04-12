<template>
    <v-app id="inspire">
        
        <!-- Отрисовка навигации -->
        <Navbar/>      

        <v-content>
            <!-- Отборажение контента -->
            <router-view ></router-view>
            
            <v-container
            class="fill-height"
            fluid
            >
            <v-row
                align="center"
                justify="center"
            >
                <v-col class="text-center">
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                    <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                    >
                        <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                    </template>
                    <span>Source</span>
                </v-tooltip>

                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                    <v-btn
                        icon
                        large
                        href="https://codepen.io/johnjleider/pen/zgxeLQ"
                        target="_blank"
                        v-on="on"
                    >
                        <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                    </template>
                    <span>Codepen</span>
                </v-tooltip>
                </v-col>
            </v-row>
            </v-container>
        </v-content>

        <v-footer
            color="blue"
            app
        >
            <span class="white--text">&copy; 2020</span>
        </v-footer>

        

    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
    name: 'App',
    props: {
        source: String,
    },
    
    components: {
        Navbar
    }, 

    filters: {
        numFormat: function(str) {
                str = str.split('').reverse();

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
            },
    }

}
</script>

<style lang="scss">
    // $container-color:#E1F5FE;
    $container-color:#c4e1f8;
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    .container-c {
        margin: 5px;
        background-color: $container-color;
        border-radius: 35px;
    }
</style>
