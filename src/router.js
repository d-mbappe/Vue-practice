import Vue from 'vue'
import VueRouter from 'vue-router'     


import Home from './views/Home.vue'
import SimpleMethods from './views/SimpleMethods.vue'
import ChangeData from './views/ChangeData.vue'
import CasesList from './views/CasesList.vue'
import ChecboxRadio from './views/CheckboxRadio.vue'
import Tests from './views/Tests.vue'
import Filters from './views/Filters.vue'

import NotFound from './views/NotFound.vue'


Vue.use(VueRouter)
const routes = [
	{ path: '/', name: 'Home', component: Home},
	{ path: '/simple-methods', name: 'SimpleMethods', component: SimpleMethods },
	{ path: '/change-data', name: 'ChangeData', component: ChangeData },
	{ path: '/checkbox-radio', name: 'ChecboxRadio', component: ChecboxRadio },
	{ path: '/cases-list', name: 'CasesList', component: CasesList },
	{ path: '/tests', name: 'Test', component: Tests },
	{ path: '/filters', name: 'Filters', component: Filters },

	{ path: '*', component: NotFound }
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});