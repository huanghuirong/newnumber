import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Homepage = (resolve) => {
	import('../components/Homepage/Homepage.vue').then((module) => {
		resolve(module)
	})
}

<<<<<<< HEAD
const Football = (resolve) => {
	import('../components/Homepage/Football.vue').then((module) => {
		resolve(module)
	})
}

const Footballmatch = (resolve) => {
	import('../components/Homepage/Footballmatch.vue').then((module) => {
		resolve(module)
	})
}
=======

>>>>>>> 82b2a3d70ccf57686b8611d647aafce60097e8a9

export default new Router({
	// mode: 'history',
	routes: [{
			path: '/',
			name: 'homepage',
			component: Homepage,
			redirect: '/homepage'
		},
		{
			path: '/homepage',
			component: Homepage
		},
<<<<<<< HEAD
		{
			path: '/football',
			component: Football
		},
		{
			path: '/footballmatch',
			component: Footballmatch
		},
=======
>>>>>>> 82b2a3d70ccf57686b8611d647aafce60097e8a9
//		{
//			path: '/shopcar',
//			component: Shopcar,
//			children: [{
//				path: '/shopcar/shoporder',
//				component: Shoporder,
//				children: [{
//					path: '/shopcar/shoporder/addresslist',
//					component: AddressList,
//					children: [{
//						path: '/shopcar/shoporder/addresslist/writeaddress',
//						component: WriteAddress
//					}, ]
//				}, ]
//			}]
//		},
	]
})
