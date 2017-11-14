<template>
//此页暂时没用
  <div>
    <div>工业用锁 技术支持详情页面</div>
    <div class="container">
      <h3>电力系统锁具解决方案指导与技术支持</h3>
      <ul id="myTab" class="nav nav-tabs">
        <li class="active"><a href="#design" data-toggle="tab">规划与设计</a></li>
        <li><a href="#test" data-toggle="tab">安全测试</a></li>
        <li><a href="#set" data-toggle="tab">部署与安装</a></li>
      </ul>

      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="design">
          <ul  >
            <li ><a href="#" >aaaaaaaaaaa室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
            <li ><a href="#" >室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
          </ul>
        </div>
        <div class="tab-pane fade" id="test">
          <ul  >
            <li ><a href="#" >bbbbbbbbbbbbbbbb室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
            <li ><a href="#" >室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
          </ul>
        </div>
        <div class="tab-pane fade" id="set">
          <ul  >
            <li ><a href="#" >ccccccccccc室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
            <li ><a href="#" >室外场景规划指导</a></li>
            <li><a href="#" >室内场景规划指导</a></li>
            <li><a href="#" >实施规划过程中的安装注意事项</a></li>
          </ul>
        </div>

      </div>



    </div>

  </div>
</template>
<script>

  $(function () {
    $('#myTab li:eq(1) a').tab('show');
  });

  export default{
    created(){

    },
    data(){
      return {

      }
    },
    methods: {


    },
    mounted() {

    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>


</style>

