<template>
  <div>
    <div class="container bg">
      <h3 class=" text-center title">欢迎使用梅花智能锁产品技术服务与支持</h3>
      <div class="search-index">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 s-inner">
          <form class="request-form ng-pristine ng-valid">
            <div class="form-group"  :model="filters">
              <input type="text" class="form-control" placeholder="请搜索您的问题、产品型号或关键字" v-model="filters.name">
              <router-link to="{path: '/searchPage',  query:{filters.name}} " target="_blank" ><span  class="glyphicon glyphicon-search" @click="filter" ></span></router-link>
            </div>
          </form>
        </div>
      </div>
      <div class="center-block" >
        <ul class="list">
          <li><router-link to='/leaveMessage'><span><i class="iconfont icon">&#xe6dc;</i><h5>需求留言</h5></span></router-link></li>
          <li><router-link to='/backFeed'><span><i class="iconfont icon">&#xe605;</i><h5>问题反馈</h5></span></router-link></li>
          <li><router-link to='/dataDownload'><span><i class="iconfont icon">&#xe84f;</i><h5>资料下载</h5></span></router-link></li>
          <li><a><span><i class="iconfont icon">&#xe67d;</i><h5>在线客服</h5></span></a></li>
        </ul>
      </div>

    </div>
    <div class="container">
      <div class="txt">
        <p class="section_3-title text-center">按解决方案找支持</p>
        <p class="section_3-link text-center">可按照解决方案查找相对应的设计指导、部署安装和测试指导等帮助</p>
      </div>

    </div>
    <div class="container">
      <div class="row solution"  >
        <div class="col-md-4 .col-xs-1" :data="industryData">
          <div class="title">
            <span class="name">工业用锁解决方案</span>
            <!--<router-link to='/industrySupportList'>-->
            <!--<span class='more'  v-if="industryData.length > 6">更多>></span>-->
            <!--</router-link>-->
          </div>
          <ul class="lists"  >
            <router-link v-for="item in industryData" :to="{path: '/industrySupportDetailss', query: {solutionId: item.technicalId}}" :key="item.name">
              <li class="item"><i class="iconfont icon">&#xe602;</i>{{item.name}}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-md-4 .col-xs-1" :data="businessData">
          <div class="title">
            <span class="name">商业用锁解决方案</span>
            <!--<router-link to='/businessSupportList' >-->
            <!--<span class='more'  v-if="businessData.length > 6">更多>></span>-->
            <!--</router-link>-->
          </div>
          <ul class="lists" >
            <router-link v-for="item in businessData" :to="{path: '/industrySupportDetailss', query: {solutionId: item.technicalId}}" :key="item.name">
              <li class="item"><i class="iconfont icon">&#xe602;</i>{{item.name}}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-md-4 .col-xs-1">
          <div class="title">
            <span class="name">私人定制解决方案</span>
            <!--<span class='more'>更多>></span>-->
          </div>
          <ul class="lists">
            <li class="item"><i class="iconfont icon">&#xe602;</i>aaaaaaaaaa</li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>
<script>

  import {technical,technicalList,solutionList} from '../../api/api';

  //  import {technical,technicalList} from '../../api/api';

  export default{
    route: {
      canReuse: false,
    },
    created(){
      this.getDetail();
      this.getDetail2();
//				this.getLists(1,'',this.filters.name,this.pageNum,this.limit);
    },
    data(){
      return {
        type:'',
        solutionId:'',
        name:'',
        pageNum:1,
        limit:6,
        listdata:[],
        desc:'',
        total:0,
        filters:{
          name:''
        },
        props:{
          name:''
        },
        type:1,
        trade:'',
        allData:[],
        industryData:[],
        businessData:[]
      }
    },
    methods: {

      //获取工业用锁技术支持列表

      getLists:function(type,solutionId,name,pageNum,limit){
        let para = {
          type:type,
          solutionId:solutionId,
          name:name,
          pageNum:pageNum,
          limit:limit
        }

        technicalList(para).then((res) => {
          console.log(res);
          this.listdata = res.data;

        })
      },

      //工业解决方案列表

      getDetail:function(index){
        let para = {
          type:1,
          trade:index,
          name:this.name,
          pageNum:this.pageNum,
          limit:1000
        }
        solutionList(para).then((res) => {
          console.log(res.data);
          this.industryData = res.data;
        })
      },
      //解决方案列表
      getDetail2:function(index){
        let para = {
          type:2,
          trade:index,
          name:this.name,
          pageNum:this.pageNum,
          limit:1000
        }
        solutionList(para).then((res) => {
//          console.log(res.data);
          this.businessData = res.data;
        })
      },

      change(page){
        this.getLists(1,'',this.filters.name,page,this.limit);
      },
      filter(){
        this.getLists(1,'',this.filters.name,this.pageNum,this.limit);
      },

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .container{
  .txt{
    border-top: 1px solid #ddd;
    text-align: center;
    margin: 115px 0 0;
  .section_3-title {
    position: relative;
    display: inline-block;
    font-size: 32px;
    line-height: 44px;
    top: -22px;
    padding: 0 18px;
    background-color: #fff;
    color: #303030;
  }
  .section_3-link {
    /*width: 500px;*/
    width:500px;
    border: 1px solid #979797;
    text-align: center;
    margin: 0 auto;
    padding: 3px;

  }

  }
  &.bg{
    padding-bottom: 5rem;
    height:500px;
    min-width: 1400px;
    width:100%;
    background: url(../../assets/images/serve.jpg) no-repeat;
    background-size:cover;
    margin:0 auto;
  .title{
    color:#fff;
    font-size:2rem;
    margin-top: 7rem;
    margin-bottom:5rem;

  }
  .search-index{
  form{
  .form-group{
    position: relative;
    width:70rem;margin: 0 auto;
  .form-control{
    font-size:1rem;
    height:3.6rem;
    margin-bottom: 3.8rem;
    padding:0.5rem 1rem;
  }
  .glyphicon{
    position: absolute;
    color:#888;
    font-size: 1.5rem;
    right: 1rem;
    top:1rem;
  }
  }

  }
  }
  .center-block{
    /*position: relative;*/
    width: 616px;
    margin:0 auto;
    clear: both;
    text-align: center;
    color: #f00;
  .list{
  li{
    box-sizing: border-box;
    width:8.5rem;
    height:8.5rem;
    display: inline-block;
    background:#0f0;
    margin-right:3rem;
  span{
    color:#fff;
  .icon{
    display: inline-block;
    font-size: 2.8rem;
    margin-top:1rem;
    margin-bottom:1rem;
  }
  h5{font-size: 1rem}
  }
  }
  li:nth-child(1){
    background:#1aa3eb;
  }
  li:nth-child(2){
    background:#1aa3eb;
  }li:nth-child(3){
     background:#495eb9;
   }li:nth-child(4){
      background:#0b70ca;
      margin-right:0;
    }
  }
  }
  }
  h3{
    font-size: 1.43rem;
  }

  }
  /*搜素结果样式*/
  .container{
  .result-list{
  .result-name{}

  .result-desc{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  p {text-indent: 2em;}
  }
  .result-time{border-bottom: 1px solid #ccc;}
  }
  .solution{
    margin:2rem 0;
  h5{margin-bottom:1.28rem;}
  .title{
  .name{color:#323232;font-size: 1rem;}
  .more{
    font-size: 1rem;
    float:right;
    cursor: pointer;
  }
  }
  .lists{
    width:100%;
    height:220px;
    overflow:hidden;
    list-style: none;
    padding:10px 15px 15px;
    background-color: #f3f3f3;
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
  .list:nth-last-child(1){
    margin-right:0;
  }
  }
  .page{
    margin:30px auto 50px;
  }
  }

</style>

