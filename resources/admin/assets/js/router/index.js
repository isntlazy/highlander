import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Dashboard from '../components/Dashboard'
import Brands from '../components/Brands/Brands'
import BrandAdd from '../components/Brands/BrandAdd'

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
		},
		{
			path: '/adm/brands/add',
			component: BrandAdd
		}
	]
})
