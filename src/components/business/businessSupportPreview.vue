<template>
  <div id="bg"  style="display: block; z-index: 1212;"  >
    <div class="container">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/businessProduct">商业用锁</BreadcrumbItem>
        <BreadcrumbItem >技术支持在线预览文档</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="container">
      <div class="top" >
        <h3 id="fileName">技术支持</h3>
        <button type="button" class="btn btn-primary"   @click="load">下载PDF文档</button>
      </div>
      <div ></div>
    </div>
    <!--{{item.preview_adress}}-->
    <div class="container" :data="solution" >
      <div class="preview" id="reader" v-for="item in solution" style="margin: 0 auto 37px;">
        <!--{{item.preview_adress}}-->
        <!--{{item.id}}-->
      </div>
    </div>


  </div>
</template>
<script>
  import '../../assets/js/doc_reader_v2'
  import {solutionDetail} from '../../api/api';

  export default{
    created(){
      let para={
        solutionId:this.$route.query.solutionId,
      }
      solutionDetail(para).then((res)=>{
        this.solution = res.data;
      this.docId= res.data.previewAdress;
      this.filename = res.data.fileName;
      this.readingOnline();
      this.download = res.data.downloadAdress;

      })
    },
    data(){
      return {
        aaa:'',
        download:'',
        solution:'',
        docId:'',
      }
    },
    methods: {
      load(){
        let download = this.download;
//                console.log(download);
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
          width: 1000, // 文档容器宽度
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


    },
    mounted() {

//            this.readingOnline();
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  .ui-dialog-mask{background-color:#fff;}
  .container{
  .top{
    h3{color:#323232;font-size:2rem;}
      button{color:#fff;background-color:#d00010;border:1px solid #d00010;margin:2.6rem auto 1.2rem;padding:6px 46px;}
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
  .lists{
    list-style: disc;
    padding:15px 20px 15px 35px;
  li{
    padding:5px;
  a{color:#323232;font-size: 1.14rem;}
  }
  }
  video{
    width: 100%;
    height:100%;
  }
  }
  .pro{

    background: url(../../assets/images/buou.jpg) no-repeat;
  }
  }
  }

</style>
