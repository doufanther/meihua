<template>

  <div>

    <div class="container">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
        <BreadcrumbItem >解决方案</BreadcrumbItem>
      </Breadcrumb>
      <div class="top" >
        <h3 style="float:left">在线提交问题反馈</h3>
        <router-link to='/industrySupport'><a  >返回技术支持首页</a></router-link>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">

          <form role="form" :model="form" width="30%" ref="form"  class="form-horizontal">
            <div class="form-group" style="margin-bottom: 10px">
              <label for="name" class="col-sm-3 col-xs-3 control-label"></label>
              <div class="col-sm-6 col-xs-6" style="color: #888;">
                对于您给予的帮助和支持，深表感谢！
              </div>
            </div>

            <div class="form-group" style="margin-top: 10px">
              <label for="name" class="col-sm-3 col-xs-3 control-label">选择产品类型：</label>
              <div class="col-sm-9 col-xs-9">
                <div class="radio"  >
									<input type="radio" class="regular-radio"  name="optionsRadios" id="advice" v-model="form.type" value="产品建议" checked>
									<label for="advice"></label><span class="txt">产品建议</span>
                  <input type="radio" class="regular-radio" name="optionsRadios" id="solution"  v-model="form.type" value="解决方案">
                  <label for="solution"></label><span class="txt">解决方案</span>
                  <input type="radio" class="regular-radio" name="optionsRadios" id="serve" v-model="form.type" value="梅花服务">
                  <label for="serve"></label><span class="txt">梅花服务</span>
                  <input type="radio" class="regular-radio" name="optionsRadios" id="problem"  v-model="form.type" value="网站问题">
                  <label for="problem"></label><span class="txt">网站问题</span>
                </div>
              </div>
            </div>
            <div class="form-group" >
              <label for="name" class="col-sm-3 col-xs-3 control-label">姓名:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="text" v-model="form.name" class="form-control"  placeholder="请输入您的姓名">
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 col-xs-3 control-label">邮箱:</label>
              <div class="col-sm-6 col-xs-6" >
                <input type="text" v-model="form.email" class="form-control"  placeholder="请输入您的邮箱">
              </div>
            </div>
            <div class="form-group">
              <label for="e" class="col-sm-3 col-xs-3 control-label">联系电话:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="text" v-model="form.phone" class="form-control"  placeholder="请输入您的联系电话">
              </div>
            </div>

            <div class="form-group">
              <label for="e" class="col-sm-3 col-xs-3 control-label">详细描述:</label>
              <div class="col-xs-6 col-xs-6 ">
                <!--<input type="textarea" class="form-control" id="n" placeholder="请输入您的详细需求">-->
                <textarea class="col-xs-12 col-xs-12 " rows="12"  v-model="form.description" placeholder="请输入您的详细描述" style="resize: none;"></textarea>
              </div>
            </div>

            <div class="form-group">
              <label for="ll" class="col-sm-3 col-xs-3 control-label"></label>
              <div class="col-sm-6 col-xs-6">
                <button type="button" class="btn btn-primary btn-sm" @click="submit">提交</button>
                <!--<button type="button" class="btn btn-default btn-sm">清空</button>-->
              </div>
            </div>
            <div class="form-group" style="margin-top:-28px">
              <label for="e" ></label>
              <div  style="margin-left:25%;font-size:14px;padding-left:15px;width:90%;color:#323232;">
                <span>我们会尽快联系您，如需获取更多帮助，请咨询在线客服或电话咨询。</span><br>
                <span>感谢您对梅花智能产品服务的支持。</span>
              </div>
            </div>

          </form>
        </div>
        <div class="col-xs-12 col-md-6 abc">
          <div class="row right">
            <h4 >梅花客户服务联系方式</h4>
            <div class="contact" >
              <div class="txt-left"><p>销售咨询：</p></div>
              <div class="txt-right">
                <p>邮箱：hzblossom@126.com</p>
                <p>电话：0571-88888888</p>
                <p>电话：0571-88866666</p>
              </div>
            </div>
            <div class="contact" >
              <div class="txt-left">
                <p>商务合作：</p>
              </div>
              <div class="txt-right">
                <p>邮箱：hzblossom@126.com</p>
                <p>电话：0571-88888888</p>
              </div>
            </div>
            <div class="contact" >
              <div class="txt-left">
                <p>解决方案咨询：</p>
              </div>
              <div class="txt-right">
                <p>邮箱：hzblossom@126.com</p>
                <p>电话：0571-88888888</p>
              </div>
            </div>
            <div class="contact" >
              <div class="txt-left">&nbsp;</div>
              <div class="txt-right">
                <button  class="btn btn-default ">
                  <a target='_blank' href="http://wpa.qq.com/msgrd?v=3&uin=190706917&site=qq&menu=yes" >
                    <i class="iconfont">&#xe601;</i>QQ在线客服</a>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

  import {feedbackAdd} from '../../api/api';
  const  phoneReg=/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;


  export default{
    created(){

    },
    data(){
      return {
        form:{
          checked:'true',
          type:'产品建议',
          name:'',
          email:'',
          phone:'',
          description:'',
          created:''
        }
      }
    },
    methods: {

      submit(){

        let phone = this.form.phone;

        let email = this.form.email;

        let name = this.form.name;
        let description = this.form.description;
        let mailReg= /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
//        !mailReg.test(email)?this.$layer.msg('请输入正确的邮箱'):'';
//        !phoneReg.test(phone)?this.$layer.msg('请输入正确的电话'):'';
        console.log(email);

        if(description ===''||phone ===''||email ===''||name ===''){
          if(description ===''){
          this.$layer.msg('请输入详细描述')
          }
          if(phone ===''){
          this.$layer.msg('联系电话不能为空')
          }if(email ===''){
            this.$layer.msg('邮箱不能为空')
          }if(name ===''){
            this.$layer.msg('姓名不能为空')
          }
        }else if(!mailReg.test(email)){
          this.$layer.msg('请输入正确的邮箱')
        }else if(!phoneReg.test(phone)){
          this.$layer.msg('请输入正确的电话')
        } else {
          let para = Object.assign({}, this.form);
          console.log(para);
          if(name&&email&&phone&&description){
            feedbackAdd(para).then((res) => {
              console.log(res);
              console.log('验证通过')
//
          });
          }

        }
        }


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
  .top{
    border-bottom:1px solid #ccc;
    height:40px;
    a{
      color:#888;
      float:right;
      position:relative;
      top:3px;
    }
  }
  .row{margin: 50px auto;
    .form-horizontal{
      .form-group{
        margin:28px 0;
        textarea{height:130px;resize: none;padding:10px;}
        .control-label{
          color: #323232;
          font-size: 16px;
          padding-right:2px;
        }
        .radio {
          .regular-radio {
            display: none;
          }

          .regular-radio + label {
            /*-webkit-appearance: none;*/
            /*box-sizing: border-box;*/
            background-color: #fafafa;
            border: 2px solid #e3e4e8;

            /*box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);*/
            padding: 9px;
            border-radius: 20px;
            display: inline-block;
            position: relative;
            top: 4px;
            margin-right: 5px;
          }
          .regular-radio:checked + label{
            border: 2px solid #d00010;
          }
          .regular-radio:checked + label:after {
            content: ' ';
            width: 10px;
            height: 10px;
            border-radius: 20px;
            position: absolute;
            top: 4px;
            left: 4px;
            background: #d00010;
            box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
            text-shadow: 0px;
            font-size: 32px;
          }
          .txt{
            display: inline-block;
            margin-right:10px;
          }

        }
        .btn {
          background-color: #d00010;
          border: 1px solid #d00010;
          padding: 5px 54px;
        }

      }
    }
  }
  .right{
    border-left: 1px solid #ccc;
    margin-top:70px;
    padding:30px 0;
      h4{padding-left:130px;}
      .contact{
        overflow: hidden;margin-top: 20px;font-size: 14px;color: #323232;
        padding:10px 50px;
        .txt-left{
          float:left;
          width: 150px;text-align: right;
        }
        .txt-right{float: left;
          button{
            border:1px solid #d00010;
            background:transparent;
          a{ color:#d00010; }
          }
        }

      }
    }


}
</style>
