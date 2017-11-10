import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Dashboard from '../components/Dashboard'
import Brands from '../components/Brands'

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/adm',
			component: Dashboard
		},
		{
			path: '/adm/brands',
			component: Brands
		}
	]
})
