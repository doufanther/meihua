<template>
    <div id="bg"  style="display: block; padding-top:15px;z-index: 1212;"  >
       <div class="container">
          <Breadcrumb separator=">">
              <BreadcrumbItem href="/">首页</BreadcrumbItem>
              <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
              <BreadcrumbItem href="/industrySolution">解决方案</BreadcrumbItem>
          </Breadcrumb>
      </div>
      <div class="container">
        <div class="top" >
          <h3 id="fileName">解决方案</h3>
          <button type="button" class="btn btn-primary"  @click="load">下载PDF文档</button>
          <!--http://www.zhangxinxu.com/study/201004/http-link-auto-able-demo.html-->
        </div>
        <div ></div>
      </div>

      <div class="container" :data="solution" >
        <div class="preview" id="reader" v-for="item in solution" style="margin: 0 auto 37px;">
        </div>
      </div>
      <div class="container">
         <div class="col-md-4 col-sm-4 col-xs-4">
           <div class="contain" style=" display:inline-block;" :data="products">
               <h5 class="text-left">相关产品</h5>
               <div class="grid-con  " id="myCarousel" >
                 <!--&lt;!&ndash; 轮播（Carousel）指标 &ndash;&gt;-->
                 <!--<ol class="carousel-indicators" :data="index" >-->
                   <!--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="1" ></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="2"></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="3"></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="4"></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="5"></li>-->
                   <!--<li data-target="#myCarousel" data-slide-to="6"></li>-->
                 <!--</ol>-->
                 <!--&lt;!&ndash; 轮播（Carousel）项目 &ndash;&gt;-->
                 <!--<div class="carousel-inner">-->
                   <!--<div class="item active" >-->
                     <!--<img src="../../assets/images/buou.jpg" alt="First slide">-->
                     <!--<div class="carousel-caption">AAAAAAAAAAAAAaaaa</div>-->
                   <!--</div>-->
                   <!--<div class="item " v-for="item in products">-->
                     <!--<img :src="item.images[0]" alt=" slide">-->
                     <!--<div class="carousel-caption">{{item.title}}</div>-->
                   <!--</div>-->
                 <!--</div>-->
                 <!--&lt;!&ndash; 轮播（Carousel）导航 &ndash;&gt;-->
                 <!--<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>-->
                 <!--<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>-->
                 <Carousel autoplay v-model="value1"  loop>
                   <CarouselItem v-for="item in products" :key="item.id">
                     <div class="demo-carousel text-center" >
                       <span class="title">{{item.title}}</span>
                       <img :src="item.images[0]+'?x-oss-process=image/resize,m_fixed,h_280,w_420'" alt=" slide" >
                     </div>
                   </CarouselItem>
                 </Carousel>

               </div>
           </div>
         </div>
        <div class="col-md-4 col-sm-4 col-xs-4" :data="industryData">

            <div class="contain" style="  display:inline-block;">
              <h5 class="text-left">技术文档</h5>
              <ul id="myTab" class="nav nav-tabs">
                <li class="active"><a href="#design" data-toggle="tab">规划与设计</a></li>
                <li><a href="#test" data-toggle="tab">安全测试</a></li>
                <li><a href="#set" data-toggle="tab">部署与安装</a></li>
                <li><a href="#guidence" data-toggle="tab">维护指导</a></li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade in active" id="design">
                  <ul class="lists"  :data="planningDesign">
                    <router-link v-for="item in planningDesign" :to="{path: '/industrySupportPreview', query: {solutionId: item.id}}" :key="item.id">
                      <li class="item"><i class="iconfont icon">&#xe602;</i>{{item.fileName}}</li>
                    </router-link>
                  </ul>
                </div>
                <div class="tab-pane fade" id="test">
                  <ul class="lists" :data="safetyTesting">
                    <router-link  v-for="item in safetyTesting" :to="{path: '/industrySupportPreview', query: {solutionId: item.id}}" :key="item.id">
                      <li class="item" ><i class="iconfont icon">&#xe602;</i>{{item.fileName}}</li>
                    </router-link>
                  </ul>
                </div>
                <div class="tab-pane fade" id="set">
                  <ul class="lists"  :data="deploymentInstallation" >
                    <router-link v-for="item in deploymentInstallation" :to="{path: '/industrySupportPreview', query: {solutionId: item.id}}" :key="item.id">
                      <li class="item"><i class="iconfont icon">&#xe602;</i>{{item.fileName}}</li>
                    </router-link>
                  </ul>
                </div>
                <div class="tab-pane fade" id="guidence">
                  <ul class="lists" :data="maintenanceGuidance">
                    <router-link  v-for="item in maintenanceGuidance" :to="{path: '/industrySupportPreview', query: {solutionId: item.id}}" :key="item.id">
                      <li class="item"><i class="iconfont icon">&#xe602;</i>{{item.fileName}}</li>
                    </router-link>
                  </ul>
                </div>

              </div>

            </div>

         </div>
        <div class="col-md-4 col-sm-4 col-xs-4">
           <div class="contain" style=" display:inline-block;">
               <h5 class="text-left">相关视频</h5>
               <div class="grid-con">
                 <video :src="adress" controls="controls">
                   您的浏览器不支持 video 标签。
                 </video>
               </div>
           </div>
         </div>
      </div>

    </div>
</template>
<script>
  import '../../assets/js/doc_reader_v2'
  import {solutionDetail,solutionToProducts,solutionToVideo,industryVideo,technicalDetail} from '../../api/api';
//  $(document).ready(function(){
//    $(".carousel-inner div:first").addClass("active");
//  });

  $(function () {
    $('#myTab li:eq(0) a').tab('show');
  });

  export default{
        created(){
          this.getVideo();
            let para={
              solutionId:this.$route.query.solutionId,
            }
          solutionDetail(para).then((res)=>{
                console.log(res.data);
              this.solution = res.data;
              this.docId= res.data.previewAdress;
              this.filename = res.data.fileName;
              this.readingOnline();
              this.download = res.data.downloadAdress;
           })
          solutionToProducts(para).then((res) => {
            console.log(res.data);
            this.products = res.data;
            var index = this.products.length;
//            console.log(index);
          })

        },
        data(){
            return {
              value1: 0,
              trade:'',
              name:'',
              pageNum:1,
              limit:6,
              download:'',
              solution:'',
              docId:'',
              industryData:[],
              type:1,
              videoData:[],
              products:[],
              index:'',


              fileName:'',
              id:113,
              previewAdress:'',
              solutionId:'',
              technicalId:'',
              planningDesign:[],
              safetyTesting:[],
              deploymentInstallation:[],
              maintenanceGuidance:[],
              adress:'',
//              setting: {
//                radiusDot: true
//              }

            }
        },
        methods: {
            load(){
                let download = this.download;
                window.open(download)
            },
          readingOnline() {
            document.getElementById('bg').className = 'ui-dialog-mask';
            document.getElementById('fileName').innerText = this.filename;
			      let docId=this.docId;
           	let option = {
              docId :docId,
              token: "TOKEN",
              host: "BCEDOC",
              width: 1200, // 文档容器宽度
              pn: 1, // 定位到第几页，可选
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
          new Document("reader", option);
        },

          getProducts:function(){
            let para = {
              solutionId:this.$route.query.solutionId,
            }
            solutionToProducts(para).then((res) => {
//              console.log(res.data);
              })
            },



          //技术支持详情页
          getDetails:function(){
            let para = {
              solutionId:this.$route.query.solutionId
            };
            technicalDetail(para).then((res) => {
              console.log(res.data);
            this.technical = res.data;
            this.planningDesign = res.data.planningDesign;
            this.safetyTesting = res.data.safetyTesting;
            this.deploymentInstallation = res.data.deploymentInstallation;
            this.maintenanceGuidance = res.data.maintenanceGuidance;
          })
          },



          getVideo(){
            let para = {
              solutionId:this.$route.query.solutionId,
            }
            solutionToVideo(para).then((res) => {
//              console.log(res.data);
              this.videoData = res.data;
              console.log(this.videoData);
              console.log(this.videoData.previewAdress);
              this.adress = res.data.previewAdress;
            })
          },


        },



        mounted() {

           this.getDetails();
			$(".carousel-inner div:first").addClass("active");
//           this.getProducts();
        },
        components: {}
    }
</script>

<style lang="scss" scoped>
  .ui-dialog-mask{background-color:#fff;}
  .ivu-breadcrumb{
    margin-top:15px;
    margin-bottom:15px;
    .ivu-breadcrumb-item-separator{
      color:#000 ;
    }
  }
.container{
  .top{
    h3{color:#323232;font-size:2rem;}
    button{color:#fff;background-color:#d00010;border:1px solid #d00010;margin:37px auto 20px;padding:6px 46px;}
  }

  .grid-con{
    background-color:#f00;
      .ivu-carousel{
        height:260px;
        .ivu-carousel-list{
          .ivu-carousel-track{
            .demo-carousel{
              position: relative;
              .title{
                color:#000;
                width: 100%;
                position: absolute;
                top:20px;
                display: inline-block;
              }
            }
          }
        }
      }



  }
  .nav-tabs{
    margin-top:0px;
    margin-bottom:0px;
    border: 1px solid #e6e6e6;border-bottom:none;background-color:#f3f3f3;
    /*overflow:hidden;*/
    li{
     margin-top:-3px;
      a{ color:#323232;}
    }
    .active{
      a{
        margin:0px;
        color:#d00010;
        background-color:#e6e6e6 ;
        border:none;
      }
    }

  }

  .tab-content{
    border: 1px solid #e6e6e6;
    margin-bottom:100px;
    height:236px;
    overflow-y:auto;
    .lists{
      width:100%;
      overflow:hidden;
      list-style: none;
      padding:10px 15px 15px;
      margin-right:1rem;
      .item{
        padding:5px;
        color:#323232;font-size: 1rem;
        /*overflow: hidden;*/
        white-space: nowrap;text-overflow: ellipsis;
        .icon{
          color:#888;
          display: inline-block;
          margin-right:10px;
        }
      }
    }
  }


  .contain{
    width:100%;
    /*height:275px;*/
    margin-bottom:50px;
    h5{color:#323232; font-size: 1.14rem;margin-bottom:1.28rem;}
    .grid-con{
      width:100%;
      height:275px;
      background-color:#f3f3f3;
      overflow:hidden;
      .lists{
        width:100%;
        height:200px;
        overflow:hidden;
        list-style: disc;
        padding:10px 20px 15px 35px;
        background-color: #f3f3f3;
        margin-right:1rem;
        .item{
          padding:5px;
          color:#323232;font-size: 1rem;
          /*overflow: hidden;*/
          white-space: nowrap;text-overflow: ellipsis;
        }
      }

      video{
        width: 100%;
        height:100%;
      }
    }
    .pro{

       /*background: url(../../assets/images/buou.jpg) no-repeat;*/
     }
  }
}

</style>
