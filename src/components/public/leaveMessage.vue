<template>

  <div>

    <div class="container">
      <Breadcrumb separator=">">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/industryProduct">工业用锁</BreadcrumbItem>
        <BreadcrumbItem href="/industrySupport">技术支持</BreadcrumbItem>
        <BreadcrumbItem >需求留言</BreadcrumbItem>
      </Breadcrumb>
       <div class="top" >
         <h3 style="float:left">在线提交需求和留言</h3>
         <router-link to='/industrySupport'><a  >返回技术支持首页</a></router-link>
       </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">

          <form role="form"  :model="form"  ref="form" class="form-horizontal">
            <div class="form-group" style="padding-top:30px;">
              <label  class="col-sm-3 col-xs-3 control-label">姓名:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="text" class="form-control" v-model="form.username" placeholder="请输入您的姓名">
              </div>
            </div>
            <div class="form-group">
              <label for="a" class="col-sm-3  col-xs-3 control-label">职位:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="text" class="form-control" v-model="form.position" placeholder="请输入您的职位信息">
              </div>
            </div>

            <div class="form-group">
              <label for="a" class="col-sm-3 col-xs-3 control-label">单位名称:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="text" class="form-control" v-model="form.unitname" placeholder="单位名称">
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 col-xs-3 control-label">邮箱:</label>
              <div class="col-sm-6 col-xs-6" >
                <input type="email" class="form-control" v-model="form.email" placeholder="请输入您的邮箱">
              </div>
            </div>
            <div class="form-group">
              <label for="e" class="col-sm-3 col-xs-3 control-label">联系电话:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="mobile" class="form-control" v-model="form.phone" placeholder="请输入您的联系电话">
              </div>
            </div>
            <div class="form-group">
              <label for="e" class="col-sm-3 col-xs-3 control-label">所在省市:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="email" class="form-control" v-model="form.address" placeholder="请输入您所在城市">
              </div>
            </div>
            <div class="form-group">
              <label for="e" class="col-sm-3  col-xs-3 control-label">所处行业:</label>
              <div class="col-sm-6 col-xs-6">
                <input type="industry" class="form-control" v-model="form.industry" placeholder="请输入您的所处行业">
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 col-xs-3 control-label">感兴趣产品:</label>
              <div class="col-sm-6 col-xs-6">
                <div class="row" style="margin:0 -15px;">
                  <div class="col-md-12">
                    <Cascader :data="ptree"   v-model="form.interested_product"></Cascader>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="e" class="col-sm-3 col-xs-3 control-label">您的需求:</label>
              <div class="col-xs-6 col-xs-6 ">
                <!--<input type="textarea" class="form-control" id="n" placeholder="请输入您的详细需求">-->
                <textarea  v-model="form.needs" class="col-xs-12 col-xs-12 " rows="12"  placeholder="请输入您的详细需求"></textarea>
              </div>
            </div>

            <div class="form-group">
              <label for="ll" class="col-sm-3 col-xs-3 control-label"></label>
              <div class="col-sm-6 col-xs-6">
                <button type="button" class="btn btn-primary btn-sm" @click="submit">提交</button>

                <!--<button type="button" class="btn btn-default btn-sm">清空</button>-->
              </div>
            </div>

          </form>


        </div>
        <div class="col-xs-12 col-md-6">

          <div class="row right">
            <h4 @click="aa">梅花客户服务联系方式</h4>
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
                  <i class="iconfont">&#xe601;</i>QQ在线客服
                </a>
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

  import {needAdd,tree} from '../../api/api';
  const  phoneReg=/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
  export default{
    created(){

      let para={
	    	classify:1,
//      type:0
      }
      tree(para).then((res)=>{
        if(res.code===200){
        	//console.log(res.data);
        	let data=res.data;
        	let ptree=[];
        	for(let i=0;i<data.length;i++){
        			let a={};
        			a.value=data[i].name;
        			a.label=data[i].name;
							let arr=[];
        			let children=data[i].children;
        			for(let i=0;i<children.length;i++){
        				let b={};
        				b.value=children[i].name;
        				b.label=children[i].name;
        				arr.push(b);
        			}
        			a.children=arr;
        			ptree.push(a);
        	}
	      	this.ptree=ptree;
	      }
    	})
    },
    data(){
      return {
        form:{
          username:'',
          position:'',
          unitname:'',
          email:'',
          phone:'',
          address:'',
          industry:'',
          interested_product:['智能锁'],
          needs:''
				},
				ptree:[],
			}
    },
    methods: {
      submit(){

        let username = this.form.username;
        let position = this.form.position;
        let unitname = this.form.unitname;
        let email = this.form.email;
        let phone = this.form.phone;
        let address = this.form.address;
        let industry = this.form.industry;
        let interested_product = this.form.interested_product;
        let needs = this.form.needs;
        let mailReg= /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
//        !mailReg.test(email)?this.$layer.msg('请输入正确的邮箱'):'';
//        !phoneReg.test(phone)?this.$layer.msg('请输入正确的电话'):'';
//        console.log(email);

        if(username===''||position===''||unitname===''||email===''||phone===''||address===''||industry===''||interested_product===''||needs===''){
          if( needs===''){
            this.$layer.msg('请填写您的需求')
          }
          if( interested_product.length===0){
            this.$layer.msg('请选择感兴趣产品')
          }if(industry ===''){
            this.$layer.msg('所处行业不能为空')
          }if(address ===''){
            this.$layer.msg('所在省市不能为空')
          }if(phone ===''){
            this.$layer.msg('联系电话不能为空')
          }if(email ===''){
            this.$layer.msg('邮箱不能为空')
          }if(unitname ===''){
            this.$layer.msg('单位名称不能为空')
          }if(position ===''){
            this.$layer.msg('职位不能为空')
          }if(username ===''){
            this.$layer.msg('姓名不能为空')
          }
        }else if(!mailReg.test(email)){
          this.$layer.msg('请输入正确的邮箱')
        }else if(!phoneReg.test(phone)){
          this.$layer.msg('请输入正确的电话')
        } else {
          let para = Object.assign({}, this.form);
          console.log(para);
          if(username&&position&&unitname&&email&&phone&&address&&industry&&interested_product&&needs){
            needAdd(para).then((res) => {
              console.log(res);
              console.log('验证通过')
              alert('留言提交成功！');
          });
          }

        }
      },
      aa(){
      	console.log(this.form.interested_product);
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
  .top {
    border-bottom:1px solid #ccc;
    height:40px;
    a{
      color:#888;
      float:right;
      position:relative;
      top:3px;
    }
   }
  .row{
    .form-horizontal{
      .form-group{
        margin:28px 0;
        .control-label{
          color: #323232;
          font-size: 16px;
          padding-right:2px;
        }
        .btn{
          background-color: #d00010;
          border:1px solid #d00010;
          padding:5px 54px;
        }
        textarea{  height:130px;resize: none;}
      }
    }
  }
  .right{
    margin-top:140px;
    border-left: 1px solid #ccc;
    padding:50px 0;
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
