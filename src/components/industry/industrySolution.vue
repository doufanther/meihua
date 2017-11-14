<template>

  <div class="solution">
    <div class="container bg">
      <h3 class=" text-center">创造全智慧的物联时代</h3>
      <h5 class=" text-center">凭借在智能锁研发方面的丰富经验和领导地位，梅花智能锁提供了适用现在、面向未来的领先世界解决方案。</h5>

    </div>

    <div class="container"  >
      <!--<h3>电力系统锁具解决方案指导与技术支持</h3>-->
      <ul id="myTab" class="nav nav-tabs" :data="allData" >
        <li @click="educlick" class="active"  ><a  data-toggle="tab" index="0">全部</a></li>
        <li @click="educlick"><a  data-toggle="tab"  index="1">电力</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="2">通信</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="3">石油</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="4">物流</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="5">市政</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="6">城市出行</a></li>
        <li @click="educlick"><a  data-toggle="tab" index="7">其他</a></li>

      </ul>

      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="all" >

          <div class=" col-set-1 pic"  v-for="(item,index) in allData" :key="index">
            <div class="contain"  >
              <router-link :to="{path: '/industrySolutionDetails', query: {solutionId: item.id}}" >
                <img :src="item.image+'?x-oss-process=image/resize,m_fixed,h_260,w_260'" alt="cat" class="img-responsive" >
                <h5 class="text-left name">{{item.name}}</h5>
                <span class="text-left desc">{{item.desc}}</span>
              </router-link>
            </div>
          </div>

          <Page class="text-center" :total=total :current=pageNum :page-size=limit show-total show-elevator @on-change="change" style="width:100%;clear:both;margin:5px auto 40px;" v-show="total>=10"></Page>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
  import {solutionList} from '../../api/api';

  export default{
    route: {
      canReuse: false,
    },
    created(){
      this.getDetail();
    },
    data(){
      return {
        type:1,
        trade:'',
        name:'',
        pageNum:1,
        limit:10,
        total:0,
        allData:[]
      }
    },
	  methods: {
	    getDetail:function(index){
	      let para = {
	          type:this.type,
	          trade:index,
	          name:this.name,
	          pageNum:this.pageNum,
	          limit:this.limit
	      }
	      solutionList(para).then((res) => {
	        console.log(res.data);
	        this.allData = res.data;
	        this.total=res.pageInfo.total;
	      })
	    },
      educlick(e){
        let index=e.target.getAttribute('index');
        this.pageNum = 1;
        this.getDetail(index);
      },
      change(page,index,e){
        this.pageNum = page;
        this.getDetail(index);
      },
    },
    mounted() {

    },
    components: {

    }
  }
</script>

<style lang="scss" >
  .ivu-breadcrumb{
    margin-top:15px;
    margin-bottom:15px;
    .ivu-breadcrumb-item-separator{
      /*color:#000 ;*/
    }
  }

    .col-set-1{
      float:left;
      width:20%;
    }


  .container{
  &.bg{
     height: 28.6rem;
     margin:0 auto;
     min-width: 1400px;
     width:100%;
     background: url(../../assets/images/industrySolution.jpg)  center no-repeat;
     background-size: 100% 100%;
  h3{
    margin-top:8.7rem;
    margin-bottom:4.1rem;
    color:#fff;
    font-size: 3.4rem;
  }
  h5{color:#fff;
    font-size: 1.57rem;
  }
  }

  .nav-tabs{
    margin-top:2.5rem;
    margin-bottom:2rem;
    border-bottom:none;
    background-color:#f3f3f3;
    height:3.43rem;
    overflow:hidden;
  li{
  a{
    color:#323232;
    font-size: 1rem;
    border-radius: 0;
    padding: 1rem 1.6rem;
    box-sizing: border-box;
    border:none;
    margin-right:0;
  }
  &:hover, &.active{
  a{
    color:#d00010;

    background-color:#e6e6e6;

    /*padding:*/
    /*padding: */
  }

  }
  }


  }

  .tab-content{
    .tab-pane>div{
      margin-bottom:3.43rem;
      padding:0 10px 0 0;
      text-decoration: none;
    }
    .tab-pane{
    /*margin-bottom:3.43rem;  !*48px*!*/
      img{
        width:100%;
        /*height:100%;*/
        overflow: hidden;
        /*width:265px;*/
        /*height:175px;*/

      }
      .name{
        font-size: 1.28rem;
        color:#323232;
        margin: 1.28rem auto 0.86rem;
      }
      .desc{
        display: block;
        font-size: 1.14rem;
        color:#888;
      }
    }

  /*分页样式*/
    .ivu-page{
      margin:0;
      .ivu-page-total{display: inline-block}
      .ivu-page-prev,.ivu-page-item,.ivu-page-next{
        background-color:#f3f3f3;
        border-radius: 0;
      }
      .ivu-page-options{
        .ivu-page-options-elevator{
          input{
            border-radius: 0;
          }
        }
      }

      .ivu-page-item-active{
         background-color: #d00010;
       }

    }

  }
}

  .dh{
    height: 50px;
  }

</style>

