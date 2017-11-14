<template>
  	<div class="container">
  		<div class="dh">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/industryProduct">商业用锁</BreadcrumbItem>
		        <BreadcrumbItem href="/industryProduct">产品列表</BreadcrumbItem>
		    </Breadcrumb>
  		</div>
  		<div class="top row">
  			<div class="col-lg-12">
  				<div class="wai">
					<div class="one" ref="small">
						<img :src="midImgList[0]" style="width: 100%;height: 100%;"/>
						<b></b>
					</div>
					<div class="two">
						<b @click="cut"><img :src="imgList[0]" alt="0"/></b>
						<b @click="cut"><img :src="imgList[1]" alt="1"/></b>
						<b @click="cut"><img :src="imgList[2]" alt="2"/></b>
						<b @click="cut"><img :src="imgList[3]" alt="3"/></b>
						<b @click="cut"><img :src="imgList[4]" alt="4"/></b>
						<i class="iconfont" @click="prev">&#xe697;</i>
						<i class="next iconfont" @click="next">&#xe600;</i>
					</div>
				</div>

				<div class="lock">
					<h2>{{product.title}}</h2>
					<h5>{{product.sellPoint}}</h5>
					<p>￥{{product.price}}</p>
					<div class="lock-main">
						<div>
							<span class="title">规格分类:</span>
							<span>{{product.standard}}</span>
						</div>
						<div class="color">
							<span class="title">颜色分类:</span>
							<span>{{product.color}}</span>
						</div>
						<div>
							<span class="title">型号:</span>
							<span>{{product.model}}</span>
						</div>
						<div>
							<span class="title">材质:</span>
							<span>{{product.material}}</span>
						</div>
						<div>
							<span class="title">用途领域:</span>
							<span>{{product.use}}</span>
						</div>
						<div>
							<span class="title">防护等级:</span>
							<span>{{product.grade}}</span>
						</div>
						<div>
							<span class="title">工作温度:</span>
							<span>{{product.temperature}}</span>
						</div>
						<div>
							<span class="title">工作湿度:</span>
							<span>{{product.humidity}}</span>
						</div>
					</div>
					<div class="buy">
						<button>立即购买</button>
						<span>如需下单，请点击“立即购买”将跳至阿里巴巴进行采购下单</span>
					</div>
				</div>
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-lg-12 col-md-12 col-xs-12">
  				<Tabs value="name1">
			        <TabPane label="产品详情" name="name1">产品详情的内容</TabPane>
			        <TabPane label="规格参数" name="name2">规格参数的内容</TabPane>
			        <TabPane label="常见问题" name="name3">常见问题的内容</TabPane>
			    </Tabs>
  			</div>
  		</div>
  	</div>
</template>


<script>
	import {tree,productDetails} from '../../api/api';

 export default{
 	computed:{

 	},
   	created(){
   		let para={
	        classify:1,
	        type:0
      	}
		tree(para).then((res)=>{
			//console.log(res);
			if(res.code===200){
				this.ptree=res.data;
			}
		})
		let productPara={
	       productId:this.$route.query.productId,
	    }
		productDetails(productPara).then((res)=>{
			//console.log(res);
			if(res.code===200){
				this.product=res.data.product;
				this.imgList=res.data.product.images;
				this.midImgList=res.data.product.images;
			}
		})
	},
	watch:{

	},
    data(){
      return {
      	product:'',
      	theme2: 'light',
      	ptree:'',
      	imgList:'',
        midImgList:'',
        index:0
      }
    },
	methods: {
     	cut(e){
       		let index=e.target.getAttribute('alt');
			  this.index=index;
     		this.change(index);
		},
     	prev(){
     		this.index--;
     		if(this.index<0) this.index=0;
     		this.change(this.index);
		},
     	next(){
     		this.index++;
     		if(this.index>4) this.index=4
     		this.change(this.index);
     	},
		change(index){
			var ione = this.$refs.small;
			let itwo = $(".two img");
			$(".one img").attr("src",this.midImgList[index]);
			$('.two b').eq(index).children('img').addClass('active').parents().siblings().children('img').removeClass('active');
		},
		toggle(id){
			this.categoryId=id;
			//this.getLists(this.categoryId,this.pageNum,this.limit);
		},
		addClass(e){
			$(e.target).addClass('active').siblings().removeClass('active');
		}
    },
    mounted() {
    	$('.two b:nth-child(1) img').addClass('active');

	},
    components: {

  	}
  }
</script>

<style lang="scss" >
.ivu-tabs-ink-bar{
	background-color:red ;
}
.ivu-tabs-nav{
	.ivu-tabs-tab{
		font-size: 16px;
		color:#323232;
		&:hover{
			color:red;
		}
	}
	.ivu-tabs-tab-active{
		color:red;
	}
}

.iconfont{
	font-size: 30px;
	cursor: pointer;
}
.top{
	margin-bottom: 77px;
}
.one{
	width: 480px;
	height: 540px;
	border: 1px solid #CCCCCC;
	position: relative;
	b{
		width: 175px;
		height: 175px;
		position: absolute;
		border: 1px solid #AFAFAF;
		top: 0;
		left: 0;
		display: none
	}

}

.wai{float: left;}
.two{
	/*padding: 30px 0 0 50px;*/
	margin-top: 22px;
	position:relative;
	b{
		display: inline-block;
		width: 84px;
		height: 84px;
		margin-right: 11px;
		&:last-child{
			margin: 0;
		}
	}
	i{
		position: absolute;
		top:20px;
		left:-35px;
		padding: 0;
	}
	.next{
		position: absolute;
		top:20px;
		left:485px;
	}
	img {
		border: 2px solid #e7e7e7;
		width:100%;
		height:100%;
		&:hover{
			border: 2px solid red;
		}
		&.active{
			border: 2px solid red;
		}
	}

}

.lock{
	float: left;
	margin-left:55px;
	h2{
		font-size: 28px;
		color: #323232;
	}
	h5{
		font-size:14px;
		color: #888888;
		margin: 17px 0 36px;
	}
	p{
		font-size: 26px;
		color: #d00010;
		margin-bottom: 32px;
	}
	.lock-main{
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
		padding-top: 28px;
		margin-bottom: 32px;
		div {
			margin-bottom: 23px;
		}
		.title{
			display: inline-block;
			width: 70px;
			text-align: right;
			margin-right: 15px;
		}
	}
	.buy{
		button {
			border: none;
			width: 160px;
			height: 48px;
			color: #fff;
			background: #d00010;
		}
	}
}
.ivu-menu{
	background: #f8f8f8;
}
.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
	background: #e6e6e6;
}
.ivu-page-item-active{
	background: #d00010;
	border-color:#d00010;
}
.menuTitle{
	height: 50px;
	background: #d00010;
	color:#fff;
	padding: 14px 24px;
}
</style>

