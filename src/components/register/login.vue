<template>
  <div class="logining container-fluid">
  		<div class="row">
  			<div class="col-lg-2"></div>
  			<div class="text col-lg-6 col-md-6 col-xs-0">
  				<h1>继往开来，行胜于言</h1>
  				<h2>梅花智能锁，让20年前的梦想变为如今的日常</h2>
  			</div>
  			<div class="col-lg-4 col-md-4 col-xs-12">
  				<div class="login">
		       	<div class="account">
		            <input type="text" placeholder="手机号" v-model="account">
		        </div>
		        <div class="account1">
		            <input type="password" placeholder="密码" v-model="passWord" >
		        </div>
		        <div class="code">
		        	<input type="text" placeholder="请输入验证码" v-model="kaptcha" />
		        	<img :src="codeImg" @click="changeCode"/>
		        </div>
		        <p class="forget">
		        	<input type="checkbox"  v-model="remb_me" />记住账号
		        	<router-link to="/resetPassword">忘记密码？</router-link>
		        </p>
		        <div style="clear:both"></div>
		        <button  class="btn btn-default btn-block" @click="login">登录</button>
		        <p class="registered">
		           <span class="login-no">没有账号？</span>
		           <span class="login-registered"><router-link to="/register">立即注册</router-link></span>
		        </p>
		      </div>
  			</div>
  		</div>
  </div>
</template>
<script>

	import {verificationCode,userlogin} from '../../api/api';

	export default{
   	created(){
				this.codeImg=verificationCode();
    },
		data(){
      return {
      	codeImg:'',
      	account:'',
        passWord:'',
        kaptcha:'',
        remb_me:false,

      }
    },
		methods: {
     	login(){
     			let passWordReg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
					let accountReg=/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	     		let account = this.account;
					let passWord=this.passWord;
					let kaptcha=this.kaptcha;

					!passWordReg.test(passWord)? this.$layer.msg('密码必须为6-16位并且必须含有字母和数字'):'';
					!accountReg.test(account) ?this.$layer.msg('请输入正确的手机号码'):'';
					if((passWordReg.test(passWord))&&(accountReg.test(account))){
							let para={
								account:account,
								password:passWord,
								kaptcha:kaptcha
							};
							userlogin(para).then((res)=>{
								if(res.code===200){
									window.location.reload();
									//this.$store.commit('login');
                  sessionStorage.setItem("account", account);
                	sessionStorage.setItem("isLogin", true);
                	//this.$store.commit('loguser',account);
			     				this.passWord='';
			     				this.kaptcha='';
			     				let redirect = this.$route.query;
									//console.log((redirect));
                  if(JSON.stringify(redirect)=='{}'){
                  	this.$router.push({ path: '/'}); 
                  }else{
                  	this.$router.push({ path: redirect.redirect});
                  }
								}else if(res.code===400){
									this.$layer.msg(res.msg);
									this.changeCode();
									this.kaptcha='';
								}else{
									this.$layer.msg(res.msg);
								}
							});
					}else{

					}
			},
			changeCode(){
					let num= parseInt(Math.random()*100+1);
					this.codeImg=verificationCode()+'?'+num;
			}
    },
    watch:{

    },
    mounted() {

    },
    components: {

  	}
  }
</script>

<style lang="scss" scoped>
	.logining{height: 570px;background: url(../../../static/img/login.jpg) no-repeat;background-size:cover ;}
	input{outline:none;}
	.text{padding-top:219px;}
	.text h1{font-size:38px;color: #fff;margin-bottom: 51px;text-align: center;}
	.text h2{font-size: 24px;color: #fff;text-align: center;}
	.login{width:350px;height:370px;margin-top:101px;background: #ffffff;padding: 45px 40px;}
	.registered{margin-top: 20px;}
	.login-btn{font-size: 18px;color:#888;}
	.login-no{font-size: 14px;color: #888;}
	.login-registered{
			a{font-size: 14px;color: #000;}
			}
	.account{width:270px;height:38px;}
	.account input{width:100%;height:100%;border-radius: 3px;border: 1px solid #e6e6e6;font-size: 14px;padding-left: 10px;}
	.account1{width:270px;height:38px;margin: 25px 0 20px;}
	.account1 input{width: 100%; height:100%;border-radius: 3px;border: 1px solid #e6e6e6;font-size: 14px;padding-left: 10px;}
	.forget{font-size: 14px;margin: 10px 0;color: #000;}
	.forget a{font-size: 14px;color: #9b9b9b;float: right;}
	.btn{height: 40px;background: #d00010;color: #fff;}
	.login-bt{height: 49px;background: #ff5426;border:1px #c9caca solid;border-radius: 5px;font-size: 18px;color: #ffffff;margin-left: 60px;margin-top: 45px;cursor: pointer;}
	.code input{width: 50%;height: 38px;border-radius: 3px;border: 1px solid #e6e6e6;font-size: 14px;padding-left: 10px;margin-right: 20px;}
	.code img{height: 38px;}
</style>

