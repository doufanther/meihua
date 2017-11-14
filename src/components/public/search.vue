 <template>
  	<div class="search container">
  			<Breadcrumb separator=">">
	        <BreadcrumbItem href="/">首页</BreadcrumbItem>
	        <BreadcrumbItem href="/search">搜索结果</BreadcrumbItem>
	      </Breadcrumb>
	      <Tabs :value="$route.query.index" :animated="false  ">
			        <TabPane label="产品" name="1">
			        	<div class="search-box">
			        		<input type="search"  name="" id="" value="" v-model="$route.query.search"/>
			        		<span @click="searchProduct">搜索</span>
			        	</div>
			        	<p>共为你找到<span class="total">{{productTotal}}</span>条关于“产品”的结果</p>
			        	<div class="result" v-show="productTotal" v-for="item in pResult">
			        		<router-link :to="{path: '/industryProductDetails', query: {productId: item.id}}">
			        			<h4>{{item.title}}</h4>
			        		</router-link>
		        			<div class="part">
		        				<div class="part-left">
		        					<img :src="item.images[0]"/>
		        				</div>
		        				<div class="part-right">
		        					<div>
		        						<span>{{item.material}}</span>
										<span>{{item.humidity}}</span>
										<span>{{item.desc.substr(0,15)}}............</span>
		        					</div>
		        					<p class="time">{{item.created.slice(0,10)}}</p>
								</div>
		        			</div>
			        	</div>
			        	<Page :total=productTotal :current=pageNum :page-size=limit   @on-change="change1" class="page" v-show="productTotal>5"></Page>
			        </TabPane>
			        <TabPane label="解决方案" name="2">
			        	<div class="search-box">
			        		<input type="search"  name="" id="" value="" v-model="$route.query.search"/>
			        		<span @click="searchSolution">搜索</span>
			        	</div>
			        	<p>共为你找到<span class="total">{{solutionTotal}}</span>条关于“解决方案”的结果</p>
			        	<div class="result" v-show="solutionTotal" v-for="item in sResult">
			        		<router-link :to="{path: '/industrySolutionDetails', query: {solutionId: item.id}}" >
			        			<h4>{{item.name}}</h4>
			        		</router-link>
			        		<div class="part">
		        				<div class="part-left">
		        					<img :src="item.image"/>
		        				</div>
		        				<div class="part-right">
		        					<div>
		        						<span>{{item.desc.substr(0,15)}}............</span>
		        					</div>
		        					<p class="time">{{item.created.slice(0,10)}}</p>
								</div>
		        			</div>
			        	</div>
			        	<Page :total=solutionTotal :current=pageNum :page-size=limit   @on-change="change2" class="page" v-show="solutionTotal>5"></Page>
			        </TabPane>
			        <TabPane label="技术支持" name="3">
			        	<div class="search-box">
			        		<input type="search"  name="" id="" value="" v-model="$route.query.search"/>
			        		<span @click="searchTechnical">搜索</span>
			        	</div>
			        	<p>共为你找到<span class="total">{{technicalTotal}}</span>条关于“技术支持”的结果</p>
			        	<div class="result" v-show="technicalTotal" v-for="item in tResult">
			        		<router-link :to="{path: '/industrySupportDetailss', query: {solutionId: item.id}}" >
			        			<h4>{{item.name}}</h4>
			        			<div class="text">
			        				{{item.desc.substr(0,15)}}..........
			        			</div>
			        			<p class="time">{{item.created.slice(0,10)}}</p>
			        		</router-link>
			        	</div>
			        	<Page :total=technicalTotal :current=pageNum :page-size=limit   @on-change="change3" class="page" v-show="technicalTotal>5"></Page>
			        </TabPane>
			  </Tabs>
  	</div>
</template>
<script>
	import {searchProductList,searchSolutionList,searchTechnicalList} from '../../api/api';

 export default{
   	created(){
   		//console.log(this.$route.query.index);
   		this.productResult(this.$route.query.search,this.pageNum,this.limit);
   		this.solutionResult(this.$route.query.search,this.pageNum,this.limit);
   		this.technicalResult(this.$route.query.search,this.pageNum,this.limit);
   	},
 	data(){
        return {
        	index:this.$route.query.index,
        	pageNum:1,
			limit:5,
			productTotal:0,
			solutionTotal:0,
			technicalTotal:0,
			pResult:'',
			sResult:'',
			tResult:''
        }
    },
    watch: {

    },
	methods: {
     	productResult(title,pageNum,limit){
     		let para={
				title:title,
				pageNum:pageNum,
				limit:limit
			}
        searchProductList(para).then((res)=>{
				console.log(res);
				if(res.code===200){
					this.pResult=res.data;
					this.total=res.pageInfo.total;
					this.productTotal=res.pageInfo.total;
				}
			})
     	},
     	solutionResult(name,pageNum,limit){
     		let para={
				name:name,
				pageNum:pageNum,
				limit:limit
			}
        searchSolutionList(para).then((res)=>{
				//console.log(res);
				if(res.code===200){
					this.sResult=res.data;
					this.total=res.pageInfo.total;
					this.solutionTotal=res.pageInfo.total;
				}
			})
     	},
     	technicalResult(name,pageNum,limit){
     		let para={
				name:name,
				pageNum:pageNum,
				limit:limit
			}
        searchTechnicalList(para).then((res)=>{
				//console.log(res);
				if(res.code===200){
					this.tResult=res.data;
					this.total=res.pageInfo.total;
					this.technicalTotal=res.pageInfo.total;
				}
			})
     	},
     	change1(page){
      		this.productResult(this.$route.query.search,page,this.limit);
    	},
    	change2(page){
      		this.solutionResult(this.$route.query.search,page,this.limit);
    	},
    	change3(page){
      		this.technicalResult(this.$route.query.search,page,this.limit);
    	},
		searchProduct(){
			let name=this.$route.query.search;
			this.productResult(name,this.pageNum,this.limit);
		},
		searchSolution(){
			let name=this.$route.query.search;
			this.solutionResult(name,this.pageNum,this.limit);
		},
		searchTechnical(){
			let name=this.$route.query.search;
			this.technicalResult(name,this.pageNum,this.limit);
		}
    },
    mounted() {

    },
    components: {

  	}
  }
</script>

<style lang="scss">
	.search{
		padding: 0 0 50px;
		.total{
			color: #D00010;
		}
		.result {
			margin-top:25px;
			border-bottom: 1px solid #e6e6e6;
			padding-bottom: 15px;
				a{
					color: #D00010;
				}
				h4{
					margin-bottom: 22px;
				}
				div{
						color: #000;
					&.part{
						overflow: hidden;
						.part-left {
							float: left;
							width: 20%;
							img{
								width: 200px;
								height: 200px;
							}
						}
						.part-right{
							float: left;
							width: 50%;
							span{
								line-height:40px;
							}
							p{
								margin-top: 25px;
								color: #D00010;
							}
						}
					}
					&.time{
						margin-top: 22px;
						color: #888;
					}
				}
		}
		.search-box{
			width: 860px;
			margin: 0 auto;
			position:relative;
			input {
				width: 100%;
				height: 42px;
				border: 1px solid #e6e6e6;
				outline: none;
			}
			span{
				position: absolute;
				top:0;
				right: 0;
				width: 105px;
			    height: 42px;
			    line-height: 42px;
			    text-align: center;
			    color: #eff7ff;
			    font-size: 14px;
			    border: 0;
			    background-color: #D00010;
			    cursor: pointer;
			}
		}
	}
	.page{
		margin-top: 35px;
		text-align: center;
	}
	.ivu-tabs-ink-bar {
		background-color:#D00010 ;
	}
	.ivu-tabs-nav .ivu-tabs-tab-active {
    	color: #D00010;
	}
	.ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #D00010;
	}
	.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
		background: #e6e6e6;
	}
	.ivu-page-item-active{
		background: #d00010;
		border-color:#d00010 ;
	}
</style>

