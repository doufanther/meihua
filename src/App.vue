<template>
  <div id="app">
  		<top-nav></top-nav>
   		<keep-alive>
   		 		<router-view  v-if="$route.meta.keepAlive"></router-view>
   		</keep-alive>
   		<router-view v-if="!$route.meta.keepAlive"></router-view>
    	<v-footer></v-footer>
   </div>
</template>

<script>
	import topNav from './components/public/topNav.vue'
	import footer from './components/public/footer.vue'
	export default {
	  name: 'app',
	  created(){

	 	},
	    data(){
	      return {
	        
	      }
	    },
		methods: {
	     
	
	  },
    mounted() {
      
    },
		components: {
			'top-nav':topNav,
			'v-footer':footer
		}
		}
</script>

<style>

	
#app {
 	font-size: 16px;
}
</style>
