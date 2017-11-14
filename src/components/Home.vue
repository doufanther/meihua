<template>
 	<div class="home container-fluid">
 		 <Carousel v-model="value1">
	        <CarouselItem>
	           <div class="brand container-fluid">
		 			<!--<img src="../../static/img/index/banner.jpg"/>-->
	                <div class="container">
	                 	<div class="row">
	                    	<div class="col-lg-7 text-center banner-left">
	                     		<h1>锁具E站</h1>
	                      		<p>一站式锁具解决方案供应商，构建智慧互联家居</p>
	                      		<p class="en">One-stop lock solution provider, Build intelligent interconnection home</p>
	                      		<div>了解详情</div>
	                    	</div>
	                    	<div class="col-lg-5 banner-right">
	                      		<img :src="lock" alt="" />
	                    	</div>
	                	</div>
                	</div>
           		</div>
	        </CarouselItem>
	       	<CarouselItem>
		        <div class="brand container-fluid">
                <!--<img src="../../static/img/index/banner.jpg"/>-->
                	<div class="container">
                  		<div class="row">
                    		<div class="col-lg-7 text-center banner-left">
                      			<h1>锁具E站</h1>
                      			<p>一站式锁具解决方案供应商，构建智慧互联家居</p>
                      			<p class="en">One-stop lock solution provider, Build intelligent interconnection home</p>
                      			<div>了解详情</div>
                    		</div>
                    		<div class="col-lg-5 text-center banner-right">
                      			<img :src="lock" alt="" />
                    		</div>
                  		</div>
                	</div>
			 	</div>
	       	</CarouselItem>
	    </Carousel>
 		<div class="container main">
 			<div class="row">
        <router-link :to="{path: '/industrySolution'}" >
 				<div class="industry  text-center">
 					<img src="../../static/img/index/lock2.jpg" alt="" />
 					<div class="title">
 						<h3>工业用锁解决方案</h3>
 						<p>为客户提供最佳的智能锁物联管理方案</p>
 					</div>
				</div>
        </router-link>
       <router-link :to="{path: '/businessSolution'}" >
 				<div class="business  text-center">
 					<img src="../../static/img/index/lock1.jpg" alt="" />
 					<div class="title">
 						<h3>商业用锁解决方案</h3>
 						<p>无需供电的情况下可实时远程授权</p>
 					</div>
				</div>
        </router-link>
        <router-link :to="{path: '/leaveMessage'}" >
 				<div class="private  text-center">
 					<img src="../../static/img/index/lock3.jpg" alt="" />
 					<div class="title">
 						<h3 class="text-left">私人定制解决方案</h3>
 						<p>让管理更精准，为客户提供最佳的智能锁物联管理方案</p>
 					</div>
				</div>
        </router-link>
 			</div>
 		</div>
 	</div>
</template>
<script>


export default {
  name: 'home',
  data(){
  	 return{
  		value1:0,
  		lock:'../static/img/index/lock.png'
  	}
  },
  components: {

  },
  methods: {

	},
}
</script>
<style lang="scss">
  .ivu-carousel-item{width: 100%}
	.ivu-carousel-dots-inside{display: none;}
	.container-fluid{padding: 0; min-width: 1400px;}
	.brand{
		padding: 0;
		height: 540px;
		position:relative;
    width:100%;
		.container {
			/*position:absolute;*/
			/*top:0;*/
			/*left:15%;*/
			/*height: 540px;*/
      /*padding-bottom: 5rem;*/
      height:500px;
      min-width: 1400px;
      width:100%;
      background: url(../../static/img/index/banner.jpg) no-repeat;
      background-size: 100% 100%;
      margin:0 auto;
			.banner-left {
				height: 540px;
				padding: 70px 0 115px 200px;
				h1{
					color: #d00010;
					font-size: 42px;
					line-height: 100px;
				}
				p{
					line-height: 70px;
					font-size: 28px;
					&.en{
						font-size: 24px;
					}
				}
				div{
					width: 120px;
					height: 40px;
					line-height: 40px;
					margin: 50px auto 0;
					background: #d00010;
					color: #fff;
					border-radius: 5px;
				}
			}
			.banner-right{
				padding-top:95px;
			}
		}
	}
	.industry,.business,.private{
		height: 275px;
		padding: 0;
		float: left;
		position:relative;
		.title{
			position:absolute;
			bottom: 25px;
			left:30px;
			color: #fff;
			text-shadow:1px 1px 10px #000;
			h3{
				text-align: left;
			}
			p{
				margin-top: 17px;
			}
		}
	}
	.business{
		margin: 0 40px;
	}
	.main{
		margin-top: 50px;
		padding-bottom: 75px;
	}
</style>
