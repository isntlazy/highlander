import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Example from '../components/Example'

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/adm',
			component: Example
		}
	]
})
