<template>

  <div class="soluionDetails">
    <div class="container">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
        <BreadcrumbItem >服务支持</BreadcrumbItem>
      </Breadcrumb>
      <div class="top"  v-for="item in technical" :data="technical" >
        <h3 >{{item.name}}</h3>
      </div>

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
</template>
<script>
  import {technicalDetail,technicalList} from '../../api/api';
  $(function () {
    $('#myTab li:eq(0) a').tab('show');
  });

  export default{
    created(){
      this.getDetails();
    },
    data(){
      return {
        created:'',
        technical:[],
        downloadAdress:'',
        fileName:'',
        fileType:'',
        id:113,
        previewAdress:'',
        productIds:'',
        solutionId:'',
        technicalId:'',
        technicalType:'',
        planningDesign:[],
        safetyTesting:[],
        deploymentInstallation:[],
        maintenanceGuidance:[],
        type:1,
        solutionId:'',
        name:'',
        limit:'',
        pageNum:''
      }
    },
    methods: {
      //技术支持详情页
      getDetails:function(){
        let para = {
            technicalId:this.$route.query.solutionId
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
    },
    mounted() {
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .ivu-breadcrumb{
    margin-top:15px;
    margin-bottom:15px;
    .ivu-breadcrumb-item-separator{
      color:#000 ;
    }
  }
  .container{
    .nav{border: 1px solid #e6e6e6;border-bottom:none}

    .tab-content{
      border: 1px solid #e6e6e6;
      margin-bottom:100px;
      min-height:300px;
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


  .top{
    margin-bottom:0px;
    h3{font-size:2rem;margin:15px 0 30px;}

  }
  .nav-tabs{
    background-color: #f3f3f3;
    margin-bottom:0;
  /*height:50px;*/
    li{
      a{
        color:#323232;
      }
    }
    .active{
      a{
        color:#d00010;
        background-color:#e6e6e6 ;
        border:none
      }
    }
  }
  }
</style>

