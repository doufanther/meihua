import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import topNav from '@/components/public/topNav'
import footer from '@/components/public/footer'


import businessProduct from '@/components/business/businessProduct'
import businessProductDetails from '@/components/business/businessProductDetails'
import businessSolution from '@/components/business/businessSolution'
import businessSolutionDetails from '@/components/business/businessSolutionDetails'
import businessSupport from '@/components/business/businessSupport'
import businessSupportPreview from '@/components/business/businessSupportPreview'

import businessVideo from '@/components/business/businessVideo'

import industryProductDetails from '@/components/industry/industryProductDetails'
import industryProduct from '@/components/industry/industryProduct'
import industrySolution from '@/components/industry/industrySolution'
import industrySupport from '@/components/industry/industrySupport'
import industryVideo from '@/components/industry/industryVideo'

import industrySupportDetailss from '@/components/industry/industrySupportDetailss'

import industrySupportPreview from '@/components/industry/industrySupportPreview'
import industrySolutionDetails from '@/components/industry/industrySolutionDetails'
import searchPage from '@/components/industry/searchPage'


import About from '@/components/aboutUs/AboutUs'
import contactUs from '@/components/aboutUs/contactUs'

import login from '@/components/register/login'
import register from '@/components/register/register'
import resetPassword from '@/components/register/resetPassword'

import leaveMessage from '@/components/public/leaveMessage'
import backFeed from '@/components/public/backFeed'
import search from '@/components/public/search'
import dataDownload from '@/components/public/dataDownload'

Vue.use(Router)

import store from '../vuex/store.js'

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
    		keepAlive: true
    	},
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      meta:{
    		keepAlive: false
    	},
      component: search
    },
    {
      path: '/businessProduct',
      name: 'businessProduct',
      meta:{
    		keepAlive: true
    	},
      component: businessProduct
    },
    {
    	path:'/businessProductDetails',
    	name:'businessProductDetails',
    	meta:{
    		keepAlive: false
    	},
    	component:businessProductDetails
    },
    {
      path: '/businessSolution',
      name: 'businessSolution',
      meta:{
    		keepAlive: true
    	},
      component: businessSolution
    },
     {
      path: '/businessSolutionDetails',
      name: 'businessSolutionDetails',
      meta:{
    		keepAlive: false
    	},
    	beforeEnter: (to, from, next) => {
       	if (!sessionStorage.getItem("account")) {
				    next({
							path: '/login',
				      query: { redirect: to.fullPath }
				    })
				} else{
					next()

				}
      },
      component: businessSolutionDetails
    },
    {
      path: '/businessSupport',
      name: 'businessSupport',
      meta:{
    		keepAlive: true
    	},
      component: businessSupport
    },{
      path:'/businessSupportPreview',
        name:'businessSupportPreview',
        meta:{
        keepAlive: false
      },
      component:businessSupportPreview
    },{
      path: '/businessVideo',
      name: 'businessVideo',
      meta:{
    		keepAlive: true
    	},
      component: businessVideo
    },
    {
      path: '/industryProduct',
      name: 'industryProduct',
      meta:{
    		keepAlive: true
    	},
      component: industryProduct
    },
    {
      path: '/industrySolution',
      name: 'industrySolution',
      meta:{
    		keepAlive: true
    	},
      component: industrySolution
    },
    {
      path: '/industrySupport',
      name: 'industrySupport',
      meta:{
    		keepAlive: true
    	},
      component: industrySupport
    },
    {
      path: '/dataDownload',
      name: 'dataDownload',
      meta:{
    		keepAlive: true
    	},
    	beforeEnter: (to, from, next) => {
       	if (!sessionStorage.getItem("account")) {
				    next({
							path: '/login',
				      query: { redirect: to.fullPath }
				    })
				} else{
					next()

				}
      },
      component: dataDownload
    },
    {
      path: '/industryVideo',
      name: 'industryVideo',
      meta:{
    		keepAlive: true
    	},
      component: industryVideo
    },
    {
      path: '/leaveMessage',
      name: 'leaveMessage',
      component: leaveMessage
    },{
      path: '/backFeed',
      name: 'backFeed',
      meta:{
    		keepAlive: true
    	},
      component: backFeed
    },{
      path: '/industrySupportDetailss',
      name: 'industrySupportDetailss',
      meta:{
    		keepAlive: false
    	},
      component: industrySupportDetailss
    },{
      path: '/industrySolutionDetails',
      name: 'industrySolutionDetails',
      meta:{
    		keepAlive: false
    	},
    	beforeEnter: (to, from, next) => {
       	if (!sessionStorage.getItem("account")) {
				    next({
							path: '/login',
				      query: { redirect: to.fullPath }
				    })
				} else{
					next()

				}
      },
      component: industrySolutionDetails
    },{
       path: '/industrySupportPreview',
       name: 'industrySupportPreview',
      meta:{
    		keepAlive: false
    	},
    	beforeEnter: (to, from, next) => {
       	if (!sessionStorage.getItem("account")) {
				    next({
							path: '/login',
				      query: { redirect: to.fullPath }
				    })
				} else{
					next()

				}
      },
      component: industrySupportPreview
    },{
    	path:'/industryProductDetails',
    	name:'industryProductDetails',
    	meta:{
    		keepAlive: false
    	},
    	component:industryProductDetails
    },
    {
    	path:'/searchPage',
    	name:'searchPage',
    	meta:{
    		keepAlive: true
    	},
    	component:searchPage
    },
    {
      path: '/about',
      name: 'About',
      meta:{
    		keepAlive: true
    	},
      component: About,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      meta:{
    		keepAlive: true
    	},
      component: contactUs,
    },
    {
      path: '/login',
      name: 'login',
      meta:{
    		keepAlive: true
    	},
      component: login
    },
    {
      path: '/register',
      name: 'register',
      meta:{
    		keepAlive: true
    	},
      component: register
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      meta:{
    		keepAlive: true
    	},
      component: resetPassword
    },
  ]
})
//router.beforeEach((to, from, next) => {
// //console.log('to:' + to.path)
//if (to.path.startsWith('/industryProductDetails') && !store.state.isLogin) {
//  next({
//
//    path: '/login',
//    query: { redirect: to.fullPath }
//  })
//} else{
//	next()
//
//}
//})




export default router

