<template>
  <div>
    <div class="container top">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem >搜索结果</BreadcrumbItem>
      </Breadcrumb>

    </div>
    <div class="container">
      <h5 class="text-left" >共为你找到<b>{{total}}</b>条关于<b>"{{filters.name}}"</b>的结果</h5>
      <div class="result-list"  v-for="list in listdata" >
        <router-link to="/industrySupport_details">
          <div class="result-name" >{{list.name}}</div>
          <div class="result-desc">
            <p prop="desc" >{{list.desc}}</p>
          </div>
          <div class="result-time">
            {{list.type}}
          </div>
        </router-link>
      </div>

      <!--<Page class="text-center" :current=pageNum :page-size=limit :total="100" :page-size="5" show-elevator @current-change="handleCurrentChange"></Page>-->

      <Page class="text-center page" :total=total :current=pageNum :page-size=limit show-total show-elevator @on-change="change"></Page>



    </div>




  </div>
</template>
<script>
  import {technical,technicalList} from '../../api/api';
  export default{
    created(){
      this.getLists(1,'',this.filters.name,this.pageNum,this.limit);
    },
    data(){
      return {
        type: 1,
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

        getList(para).then((res) => {
          console.log(res);
        this.listdata = res.data;
        this.total = res.pageInfo.total;
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


  /*搜素结果样式*/
  .container{
    &.top{
      margin-bottom: 30px;
    }
    h3{
      font-size: 1.43rem;
    }
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
    .page{

      margin:30px auto 50px;

    }
  }

</style>

