<template>
  	<div class="productList container">
  		<div class="dh">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
		        <BreadcrumbItem >产品列表</BreadcrumbItem>
		    </Breadcrumb>
  		</div>
  		<div class="row">
  			<div class="col-lg-2 col-md-2 col-sm-2">
  				<div class="menuTitle">
  					请选择产品分类
  				</div>
  				<Menu :theme="theme2" style="width: 100%;">
	                <Submenu name="1" v-for="(item,index) in ptree"  :key="index">
	                    <template slot="title">
	                    	<span @click="toggle(item.id)">{{item.name}}</span>
	                    </template>
	                    <MenuItem :name="index" v-for="(item,index) in item.children" :key="index"><span @click="toggle(item.id)">{{item.name}}</span></MenuItem>
	                </Submenu>
	            </Menu>
			</div>
  			<div class="col-lg-10 col-md-10 col-sm-10">
  				<ul class="list row">
					<li v-for="(item,index) in products" class="">
  						<router-link :to="{path: '/industryProductDetails', query: {productId: item.id}}" >
							<h3><img :src="item.images[0]" alt="" /></h3>
							<p class="title">{{item.title}}</p>
							<p class="point">{{item.sellPoint}}</p>
							<p class="price">￥{{item.price}}</p>
  						</router-link>
	  				</li>
	  			</ul>
				<Page :total=total :current=pageNum :page-size=limit   @on-change="change" class="page" v-show="total>=15"></Page>
  			</div>
  		</div>
  	</div>
</template>
<script>
		import {tree,productList} from '../../api/api';
 export default{
   	created(){
		let para={
	        classify:1,
	        type:1
      	}
		tree(para).then((res)=>{
			if(res.code===200){
				this.ptree=res.data;
			}
		})
		this.getLists(this.categoryId,this.pageNum,this.limit);

 	},
    data(){
      return {
      	theme2: 'light',
      	categoryId:1,
      	pageNum:1,
      	limit:15,
        ptree:'',
        products:'',
        total:0,
      }
    },
	methods: {
		getLists(categoryId,pageNum,limit){
			let para={
				categoryId:categoryId,
				pageNum:pageNum,
				type:1,
				limit:limit
			}
			productList(para).then((res)=>{
				//console.log(res);
				if(res.code===200){
					this.products=res.data;
					this.total=res.pageInfo.total;
				}
			})
		},
    	change(page){
      		this.getLists(this.categoryId,page,this.limit);
    	},
		toggle(id,e){
			this.categoryId=id;
			this.getLists(this.categoryId,this.pageNum,this.limit);
		}
	},
    mounted() {

    }
  }
</script>

<style lang="scss">
	.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
		padding: 0;
	}
	.ivu-menu-submenu-title {
		span{
			display: inline-block;
			width: 60%;
			height: 100%;
			margin: 14px 0 14px 24px;
		}
		i{
			margin: 14px 20px;
		}
	}
	.ivu-menu-item{
		span{
			display: inline-block;
			width: 100%;
			height: 100%;
			padding: 14px 24px 14px 0;
		}
		i{
			margin: 14px 20px;
		}
	}
	.ivu-menu-vertical.ivu-menu-light:after{width: 0;}
	.ivu-menu{
		background: #f8f8f8;
	}
	.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
		background: #e6e6e6;
	}
	.ivu-page-item-active{
		background: #d00010;
		border-color:#d00010 ;
	}
	.menuTitle{
		height: 50px;
		background: #d00010;
		color:#fff;
		padding: 14px 24px;
	}
	.list{
		overflow: hidden;
		li {
			width:18%;
			height: 260px;
			margin: 0 2% 25px 0;
			float: left;
			/*padding: 0 20px;*/
			background: #f8f8f8;
			&:nth-child(5),&:nth-child(10),&:nth-child(15){
				margin-right: 0;
			}
			img{
				width: 100%;
				height: 150px;
			}
			p{
				/*padding: 0 30px;*/
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
				&.price {
					text-align: center;
					color: #d00010;
					margin-top: 12px;
				}
				&.title{
					font-size: 16px;
					color: #323232;
					margin-top:10px;
				}
				&.point{
					font-size: 14px;
					color: #8d8c8c;
					margin-top:4px;
				}
			}
		}
	}
	.page{
		margin-top: 35px;
		text-align: center;
	}
	.productList{
		padding-bottom: 50px;
	}
.dh{
  margin-top:15px;
  height: 35px;
}
</style>

