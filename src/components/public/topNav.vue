<template>
	<div class="top-header">
		<nav class="navbar navbar-default" >
		    <div class="container">
			      <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			        <button type="button" class="navbar-toggle collapsed">
			          <span class="sr-only">Toggle navigation</span>
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			        </button>
			        <a class="navbar-brand" href="#"><img :src="logoUrl"/></a>
			    </div>

			    <!-- Collect the nav links, forms, and other content for toggling   -->
		      	<div>
			        <ul class="nav navbar-nav">
			          <li  class="active" @click="toggleClass"><router-link to="/">首页</router-link></li>
			          <li class="dropdown" v-for="item in nav1" @click="toggleClass">
			            <router-link class="dropdown-toggle" data-toggle="dropdown" :to="item.router">{{item.name}}<span class="caret"></span></router-link>
			            <ul class="dropdown-menu" role="menu">
			              <li v-for="item in item.children"><router-link :to="item.router">{{item.name}}</router-link></li>
			            </ul>
			          </li>
			          <li class="dropdown" v-for="item in nav2" @click="toggleClass">
			            <router-link class="dropdown-toggle" data-toggle="dropdown" :to="item.router">{{item.name}}<span class="caret"></span></router-link>
			            <ul class="dropdown-menu" role="menu">
			              <li v-for="item in item.children"><router-link :to="item.router">{{item.name}}</router-link></li>
			            </ul>
			          </li>
			          <li  @click="toggleClass"><router-link to="/about">走进梅花</router-link></li>
			        </ul>
			        <form class="navbar-form navbar-right" role="search">
			            <div class="form-group">
			            	<span class="searchboxs">
								<input type="text" class="form-control" placeholder="搜索..." v-model="search"  @focus="show=true" @focusout="">
								<i class="glyphicon glyphicon-search" @click="choose" i='1'></i>
			            		<div v-show="show" class="searchmain">
			            			<div v-show="search">
			            				<p class="active" @click="choose" i='1'>搜“<span >{{search}}</span>”相关产品</p>
				            			<p @click="choose" i='2'>搜“<span>{{search}}</span>”相关解决方案</p>
				            			<p @click="choose" i='3'>搜“<span>{{search}}</span>”相关技术支持</p>
			            			</div>
			            		</div>
			            	</span>
			            	<span class="login" v-show="!islogin">
								<router-link to="/login">登录</router-link>
								<router-link to="/register">注册</router-link>
							</span>
							<span class="logined" v-show="islogin">
								<!--<b>{{this.$store.state.account}}</b>-->
								<b>{{account}}</b>
								<s @click="logout">退出登录</s>
							</span>
			            </div>
			        </form>

		    	</div><!-- /.navbar-collapse -->

		    </div><!-- /.container-fluid -->
  		</nav>
  	</div>
</template>

<script>
export default {
	data () {
		return {
			show:false,
			account:'',
			islogin: '',
			logoUrl:'./static/img/index/logo.png',
			search:'',
			nav1:[
					{	name: '工业用锁',
						type: 'industry',
						router:'/industryProduct',
						children: [
							{name: '产品中心', router: '/industryProduct'},
							{name: '解决方案', router: '/industrySolution'},
							{name: '技术支持', router: '/industrySupport'},
							{name: '视频',router: '/industryVideo'},
						]
					}
				],
			nav2:[
					{	name: '商业用锁',
						type: 'business',
						router:'/businessProduct',
						children: [
							{name: '产品中心', router: '/businessProduct'},
							{name: '解决方案', router: '/businessSolution'},
							{name: '技术支持', router: '/businessSupport'},
							{name: '视频',router: '/businessVideo'},
						],
					},
				],
		}
	},
	ready () {

	},
	computed:{

	},
	watch:{
		
	},
	created(){
		this.account=sessionStorage.getItem("account");
        this.islogin=sessionStorage.getItem("isLogin");
	},
	methods: {
		toggleClass(e){
			//console.log(e.currentTarget);
			$(e.currentTarget).addClass('active').siblings().removeClass('active');
		},
		logout(){
			//this.$store.commit('logout');
			this.islogin=false;
			sessionStorage.setItem("account", '');
			sessionStorage.setItem("isLogin", false);
			this.$router.push({ path: '/login' });
		},
//		toSearch(){
//			let search=this.search;
//			this.$router.push({ path: '/search' ,query: {search: search}});
//			this.search='';
//		},
		choose(e){
			let index=e.target.getAttribute('i');
			//console.log(index);
			let search=this.search;
			this.$router.push({ path: '/search' ,query: {search: search,index:index }});
			this.search='';
		}

	},
	components: {

	},
	mounted(){
        	//this.account=localStorage.getItem("account");
        	//this.islogin=localStorage.getItem("isLogin");
//    	$('.searchboxs div p').on('click',function(){
//    		$(this).addClass('active').siblings().removeClass('active');
//    	})
   }
}
</script>

<style lang="scss" scoped>
	s{text-decoration: none;cursor: pointer;}
	.top-header{
		height: 88px;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
		/*margin-bottom: 15px;*/
		padding: 12px 0;
		.navbar {
			margin: 0;
			background: #fff;
			border:none;
		}
	}
	.navbar-right{
		margin-right:-30px;
	}
	.navbar-brand{
		padding: 0;
		height:64px;
		line-height:64px;
		margin-right: 108px;
		img{
			vertical-align: top;
			display: inline-block;
			margin-right: 10px;
		}
		span{
			font-size:1.65em;
		}
	}
	.nav>li:first-child{
		a{
			/*padding-left:140px ;*/
		}
	}
	.nav{
		li {
			text-align:center;
			a {
				padding:0 42px;
				height: 64px;
				line-height: 64px;
				text-align: center;
				margin-right: 0px;
				color: #888888;
				font-size: 1em;
			}
			&.active {
				a {
					background: #fff;
					color:#d00010;
					&:hover{
						background: #fff;
						color:#d00010;
					}
					&:focus{
						background: #fff;
						color:#d00010;
					}
				}
				.dropdown-menu{
					border: none;
					li{
						a{
							color: #000;
							height: 40px;
							line-height: 40px;
							&:hover{
								color:#d00010;
							}
						}
					}
				}
			}
		}
	}
	.navbar-form{
		margin-top: 18px;
		.form-group{
			.login,.logined{
				display: inline-block;
				margin-left: 20px;
				a{
					display: inline-block;
					margin-left:20px;
					color:#323232;
				}
			}
			.form-control{
				height: 30px;
			}
			.searchboxs{
				position: relative;
				.glyphicon{
					position: absolute;
					top:2px;
					right: 10px;
					width: 20px;
					height: 30px;

				}
				.searchmain{
					width: 100%;
					position:absolute;
					top:25px;
					left: 0;
					z-index: 999;
					background: #fff;
					padding: 10px 0;
					div {
						p {
							cursor: pointer;
							&.active {
								background: #ccc;
							}
							&:hover{
								background: #e8e8e8;
							}
						}
						span{
							color: #D00010;
						}
					}
				}
			}
		}
	}
	.navbar-toggle{
		margin-top: 6px;
	}

</style>
