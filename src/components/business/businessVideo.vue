<template>
  <div class="productList container">
    <div class="aa">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/businessProduct">商业用锁</BreadcrumbItem>
        <BreadcrumbItem href="/businessVideo">视频</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="container">
        <div class="tab-pane fade in active md-trigger" >
          <div class="col-md-3 col-sm-3 col-xs-3 col-set-1  "  v-for="item in videoList"  @click="showDetail(item.previewAdress)" >
            <div class="contain" style=" position:relative;overflow:hidden; display:inline-block;" >
              <img :src="item.image" alt="image" class="img-responsive" style="border:1px solid #f00">
              <div class="tips">
                <span ><i class="iconfont icon">&#xe603;</i></span>
              </div>
              <h5 class="text-center" >{{item.name}}</h5>
            </div>
          </div>
        </div>
	</div>
	<Modal v-model="modal1" width="1030px" :scrollable="true">
      <p slot="header" style="color:#f60;text-align:center">
        <!--在线浏览-->
      </p>
      <div style="text-align:center">
        <div  id="video">
          <video :src="Adress" @click='playPause()' controls="controls" autoplay="autoplay" style="width: 100%">
            		 您的浏览器不支持 video 标签。
          </video>
        </div>
      </div>
      <div slot="footer" style="display: none">
        <!--<Button type="error" size="large" >下载</Button>-->
      </div>
    </Modal>
</div>

</template>

<script>

  import {industryVideo } from '../../api/api';
 export default{
   	created(){
		this.getVideoList(this.type,this.pageNum,this.limit);
		console.log(this.videoList);
 	},
    data(){
      return {
         type:2,
         pageNum:1,
         limit:15,
         videoList:'',
         Adress:'',
         modal1: false
      }
    },
    methods: {
	    getVideoList(type,pageNum,limit){
		    let para = {
		        type:type,
		        pageNum:pageNum,
		        limit:limit
		    }
	      	industryVideo(para).then((res) => {
		        console.log(res.data);
		        this.videoList = res.data;
		        this.id = res.data;
		     })
	    },
    	showDetail(src){
    		this.modal1=true;
    		this.Adress=src;
        var myVideo = document.getElementsByTagName('video')[0];   //获取视频video
        myVideo.play();
    	},
      playPause:function() {

        var myVideo = document.getElementsByTagName('video')[0];   //获取视频video
        myVideo.autoplay = true;
        if (myVideo.paused) {
          myVideo.play();
        } else {
          myVideo.pause();
        }
        myVideo.onclick = function () {
          var _this = this;
          _this.play();
        }
      },
      pause:function(){
    	    var _this = this;
          _this.pause();
//        var myVideo = document.getElementsByTagName('video')[0];
//        myVideo.pause();
      },
      play:function(){
        var _this = this;
        _this.play();
//        var myVideo = document.getElementsByTagName('video')[0];
//        myVideo.play();
      },
      close:function () {
        var _this = this;
        var myVideo = document.getElementsByTagName('video')[0];
        var modelbg = document.getElementsByClassName('ivu-modal');
        var x = document.getElementsByClassName('ivu-icon-ios-close-empty')[0];
        x.onclick = function(){
          myVideo.currentTime=0;
          _this.pause();

        };
        modelbg.onclick = function () {
            console.log('vvvvvvvv');
//          myVideo.currentTime=30;
//           _this.pause();

        }
      }
	},
    mounted() {
       this.close();
    },
    components: {

  	},

   watch: {
     modal1: function () {
       if (this.modal1 === false) {
         this.Adress = '';
       }
     }
   }


  }



</script>

<style lang="scss" scoped>
  .ivu-breadcrumb{
    margin-top:15px;
    margin-bottom:15px;
  .ivu-breadcrumb-item-separator{
    /*color:#000 ;*/
  }
  }
  @media(min-width:1170px){
    .col-set-1{
      width:20%;
    }
  }
  .nav-tabs{
    margin-bottom:10px;
    background-color:#ccc;
  }


  .container{
  .tab-pane{
  .contain{
    color:#fff;
    cursor:pointer;
    position:relative;
    display:inline-block;
  &:hover{
  img{
    opacity: 1;
  }
  }
  img{
    opacity: 0.8;
    /*min-width:260px;*/
    /*height:190px;*/
  }
  .tips{
    width: 60px;
    height: 60px;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  span {
  .icon{
    color:#fff;
    font-size:40px;
  }
  }

  }
  /*h5{*/
    /*font-size:16px;*/
    /*position: absolute;*/
    /*bottom:10px;*/
    /*left:5px;*/
  /*}*/

  }
  }
  }
  .productList{
    padding-bottom: 50px;
  }
  .aa{
    height: 40px;
  }




</style>

