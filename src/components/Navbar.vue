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
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    Vue Skills
                </v-list-item-title>
                <v-list-item-subtitle>
                    choose group
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list rounded>
                <v-list-item  link v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon color="blue"> {{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title  class="subtitle-2" > 
                        {{link.text}}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
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
            {icon: 'home', text: 'Home', route: '/'},
            {icon: '', text: 'Simple Methods', route: '/simple-methods'},
            {icon: '', text: 'About', route: '/about'},
            {icon: '', text: 'Contact', route: '/contact'}
        ]
        
}),
}
</script>

<style  scoped>
    
</style>