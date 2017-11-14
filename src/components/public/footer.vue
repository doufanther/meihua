<template>
  	<div class="container-fluid">
  		<div class="container-fluid footer1">
  			<div class="container">
  				<span><router-link to="">关于梅花智能锁</router-link></span>
  				<span><router-link to="/contactUs">联系我们</router-link></span>
  				<span><router-link to="">加入我们</router-link></span>
  				<span><router-link to="/backFeed">售后政策</router-link></span>
  				<span><router-link to="">手机版</router-link></span>
  			</div>
  		</div>
  		<div class="container-fluid footer2">
  			<div class="container">
  				<div class="row">
  					<div class="col-lg-2  col-md-2 col-sm-2 line">
  						<p><router-link to="">梅花锁业集团总公司</router-link></p>
  						<p><router-link to="">淘宝商城</router-link></p>
  						<p><router-link to="">管理登录</router-link></p>
  					</div>
  					<div class="col-lg-5  col-md-5 col-sm-5 line">
  						<p>浙ICP备17014004号</p>
  						<p>Copyright © 2017 杭州梅花智能锁科技有限公司</p>
  						<p>地址：浙江省杭州市滨江区建业路511号华创大厦2106，2107室</p>
  					</div>
  					<div class="col-lg-3  col-md-3 col-sm-3">
  						<h3><i class="iconfont">&#xe671;</i>0571-86813375</h3>
  						<p>周一至周六 9:00-18:00</p>
  						<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=439339317&site=qq&menu=yes">
  							<div class="qq"><img src="../../../static/img/qq.png"/></div>
  						</a>
  					</div>
  					<div class="col-lg-2  col-md-2 col-sm-2 text-right code">
  						<img src="../../../static/img/index/logo.jpg"/>
  						<h6 class="text-center">官方微信</h6>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
</template>
<script>

 export default{
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

  	}
  }
</script>

<style lang="scss" scoped>
	a,h3{
		color: #969798;
	}
	.container-fluid{
		padding: 0;
	}
	.footer1{
		height: 74px;
		background: #282d30;
		.container {
			padding: 0;
			background: #282d30;
		}
		span{
			display: inline-block;
			padding: 25px 0;
			a {
				display: inline-block;
				padding: 0 20px;
				border-right: 1px solid #969798;
				color: #c9c9c9;
				font-size:0.9em;
			}
			&:last-child {
				a{
					border: none;
				}
			}
			&:first-child{
				a{
					padding-left: 0;
				}
			}
		}
	}
	.footer2{
		height: 215px;
		background: #323639;
		padding-top:65px;
		.container {
			background: #323639;
			.row {
				div {
					padding-left: 70px;
				}
				div:first-child{padding: 0;}
				.code{
					position: relative;
					top:-20px;
					left: 0;
					h6{
						padding-top:10px;
						color: #c9c9c9;
						font-size: 0.9em;
						margin: 0;
					}
				}
			}
		}
		p{
			margin-bottom: 21px;
			color: #c9c9c9;
			font-size: 0.9em;
			a{
				color: #c9c9c9;
				font-size: 0.9em;
			}
		}
		h3{
			font-size:2em;
			margin-bottom: 10px;
		}
		.qq{
			width: 122px;
			height: 32px;
		}
		.iconfont{
			font-size:30px;
		}
		.line{
			border-right: 1px solid #595a5c;
		}
	}
</style>

