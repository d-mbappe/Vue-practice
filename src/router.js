import Vue from 'vue'
import VueRouter from 'vue-router'     


import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'


Vue.use(VueRouter)
const routes = [
	{ path: '/', name: 'Home', component: Home},
	{ path: '/about', name: 'About', component: About },
	{ path: '/contact', name: 'Contact', component: Contact },
	{ path: '*', component: NotFound }
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});