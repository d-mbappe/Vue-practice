import Vue from 'vue'
import VueRouter from 'vue-router'     


import Home from './views/Home.vue'
import SimpleMethods from './views/SimpleMethods.vue'
import NotFound from './views/NotFound.vue'

import About from './components/About.vue'
import Contact from './components/Contact.vue'


Vue.use(VueRouter)
const routes = [
	{ path: '/', name: 'Home', component: Home},
	{ path: '/simple-methods', name: 'SimpleMethods', component: SimpleMethods },
	{ path: '/about', name: 'About', component: About },
	{ path: '/contact', name: 'Contact', component: Contact },
	{ path: '*', component: NotFound }
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});