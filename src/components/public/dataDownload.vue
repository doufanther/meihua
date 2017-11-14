<template>
  	<div class="dataDownload container">
  		<div class="row">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
		        <BreadcrumbItem href="/dataDownload">资料下载</BreadcrumbItem>
		    </Breadcrumb>
  		</div>
  		<div class="row">
  			<div class="col-lg-2">
  				<div class="menuTitle">
  					请选择产品分类
  				</div>
  				<Menu :theme="theme2" style="width: 100%;">
	                <Submenu name="1" v-for="(item,index) in ptree"  :key="index">
	                    <template slot="title">
	                    	<span @click="toggle(item.id)">{{item.name}}</span>
	                    </template>
	                    <MenuItem :name="index" v-for="(item,index) in item.children" :key="index"><span @click="toggle(item.id)" style="width: 100%;">{{item.name}}</span></MenuItem>
	                </Submenu>
	            </Menu>
			</div>
  			<div class="col-lg-10">
  				<ul class="datalist row">
					<li v-for="item in dataLists">
						<div class="dataleft">
							<p class="title">
								{{item.fileName}}
								<i class="iconfont" style="color:#217245" v-show="item.fileType==='xls'">&#xe60e;</i>
								<i class="iconfont" style="color:#D24625" v-show="item.fileType==='ppt'">&#xe61d;</i>
								<i class="iconfont" style="color:#0C46A7" v-show="item.fileType=='doc'||item.fileType=='docx'">&#xe606;</i>
								<i class="iconfont" style="color:#B21C28" v-show="item.fileType==='pdf'">&#xe604;</i>
							</p>
							<p class="time">{{item.created.slice(0,10)}}</p>
						</div>
						<div class="dataright">
								<button class="online"  @click="readingOnline(item.previewAdress)">在线浏览</button>
								<button @click="onload(item.downloadAdress)">下载</button>
						</div>
					</li>
	  			</ul>
				<Page :total=total :current=pageNum :page-size=limit   @on-change="change" class="page" v-show="total>=8"></Page>
  			</div>
  		</div>
  		<Modal v-model="modal1" width="1030px" :scrollable="true">
	      <p slot="header" style="color:#f60;text-align:center">
            在线浏览
        </p>
        <div style="text-align:center">
            <p id="datareader"></p>
        </div>
        <div slot="footer">
            <!--<Button type="error" size="large" >下载</Button>-->
        </div>
	    </Modal>
  	</div>
</template>
<script>
		 import '../../assets/js/doc_reader_v2'
		import {tree,dataDownload} from '../../api/api';
export default{
  created(){
		let para={
//	    classify:1,
	     type:0
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
	  	limit:8,
	    ptree:'',
	    dataLists:'',
	    total:0,
	    modal1: false
	  }
	},
	methods: {
		getLists(categoryId,pageNum,limit){
			let para={
				categoryId:categoryId,
				pageNum:pageNum,
				limit:limit
			}
			dataDownload(para).then((res)=>{
				//console.log(res);
				if(res.code===200){
					this.dataLists=res.data;
					this.total=res.pageInfo.total;
				}
			})
		},
    change(page){
      	this.getLists(this.categoryId,page,this.limit);
    },
		toggle(id){
			this.categoryId=id;
			this.getLists(this.categoryId,this.pageNum,this.limit);
		},
		readingOnline(docId) {
//      document.getElementById('bg').className = 'ui-dialog-mask';
				$('#datareader').empty();
				this.modal1=true;
				let docId1=docId;
				console.log(docId1);
       	let option = {
//                docId: "doc-hjiscqiymd9g6c2",
          docId :docId1,
          token: "TOKEN",
          host: "BCEDOC",
          width: 1000, // 文档容器宽度
          pn: 3, // 定位到第几页，可选
          ready: function (handler) { // 设置字体大小和颜色, 背景颜色（可设置白天黑夜模式）
            handler.setFontSize(1);
            handler.setBackgroundColor("#000");
            handler.setFontColor("#fff");
          },
          flip: function (data) { // 翻页时回调函数, 可供客户进行统计等
//                console.log(data.pn);
          },
          fontSize: "big",
          toolbarConf: {
            page: true, // 上下翻页箭头图标
            pagenum: true, // 几分之几页
            full: false, // 是否显示全屏图标,点击后全屏
            copy: true, // 是否可以复制文档内容
            position: "center" // 设置 toolbar中翻页和放大图标的位置(值有left/center)
          } //文档顶部工具条配置对象,必选
        };
      new Document("datareader", option);
    },
    onload(download){
        let download1 =download;
				window.open(download1)
    },
	},
  mounted() {

  }
}
</script>

<style lang="scss">
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
	.datalist{
		padding-left: 50px;
		li {
			padding:20px 0;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			.dataleft {
				float: left;
				.title{
					font-size:18px ;
					color:#323232;
				}
				.time{
					font-size:14px ;
					color:#888;
				}
			}
			.dataright{
				float: right;
				button{
					outline: none;
					width:140px;
					height: 40px;
					border: 1px solid #D00010;
					border-radius: 5px;
					background: #D00010;
					color: #fff;
					font-size: 14px;
					&.online{
						margin-right: 50px;
						color: #D00010;
						background: #fff;
					}
				}
			}
		}
	}
	.page{
		margin-top: 35px;
		text-align: center;
	}
	.dataDownload{
		padding-bottom: 50px;
	}
</style>

