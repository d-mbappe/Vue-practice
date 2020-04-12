<template>
    <div>
        <v-app-bar
            app
            dense
            color="blue"
            dark
            
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title class="text-uppercase">Vue Skills</v-toolbar-title> 
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            app    
            >
            <v-list color="" max-height="">
                <v-list-item>
                    <v-list-item-content>
                    
                        <v-icon color="blue">account_circle</v-icon>
                        <span class="headline text-center">  Choose group  </span>
                    
                    <v-list-item-subtitle>
                        
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <!-- <v-divider></v-divider> -->
            
            <v-list shaped>
                <v-list-item-group  color="primary">
                        <v-list-item  link v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-action>
                                <v-icon :color="link.color"> {{link.icon}}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title  class="subtitle-2" > 
                                    {{link.text}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>


        
    </div>
</template>

<script>
export default {
    name: "navbar",
    data: () => ({
        drawer: null,
        links: [
            {icon: 'home', text: 'Home', route: '/', color:'blue'},
            {icon: 'code', text: 'Simple Methods', route: '/simple-methods', color:'pink'},
            {icon: 'build', text: 'Change Data', route: '/change-data', color:'orange'},
            {icon: 'check_box', text: 'Checkbox and Radio', route: '/checkbox-radio', color:'green'},
            {icon: 'list', text: 'Cases Lists', route: '/cases-list', color:'indigo'},
            {icon: 'live_help', text: 'Tests', route: '/tests', color:'amber'},
            {icon: 'swap_horiz', text: 'Filters', route: '/filters', color:'red'},

        ]  
}),
}
</script>

<style lang=""  scoped>
    
</style>

<style lang="scss" scoped>

</style>