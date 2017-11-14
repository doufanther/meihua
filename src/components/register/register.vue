<template>
  <div class="container">
  	<div class="row">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/register">注册</BreadcrumbItem>
		    </Breadcrumb>
  	</div>
  	<div class="zhuce row">
  			注册
  	</div>
  	<div class="registed row">
  		<div class="register col-lg-6 col-md-6 col-xs-6 text-center">
  				<div>
  					<span>邮箱:</span>
  					<input type="email" placeholder="" v-model="mail"/>
  				</div>
  				<div>
  					<span>手机号码:</span>
  					<input type="text"  placeholder="" v-model="phone"/>
  				</div>
  				<div>
  					<span>密码:</span>
  					<input type="password"  placeholder="" v-model="passWord"/>
  				</div>
  				<div>
  					<span>确认密码:</span>
  					<input type="password"  placeholder="" v-model="confirmPassWord"/>
  				</div>
					<div>
						<span>验证码:</span>
						<input type="text"  placeholder="" v-model="code" class="code">
						<button class="btn btn-default"  :disabled="!showCode">
							<b class="resetCode" v-if="showCode" @click="resetCode">验证码</b>
							<b class="countDown" v-else>{{countNum}}s</b>
						</button>
					</div>
					<div>
						<span>&nbsp;</span>
						<input type="checkbox" name="" id="" value="" v-model="isAgree" class="agree"/>我已阅读并同意梅花用户注册协议
					</div>
					<div>
						<span>&nbsp;</span>
						<input type="button" class="register1" value="立即注册" @click="submit"/>
					</div>
			</div>
			<div class="col-lg-6 col-md-6 col-xs-6 ">
  			<img :src="brandImg" alt="" />
  		</div>
  	</div>
  </div>
</template>

<script>
		import {register,userSms} from '../../api/api'
	
 export default{
   	created(){

 		},
    data(){
      return {
        brandImg:'../static/img/register.jpg',
        mail:'',
        phone:'',
				passWord:'',
				confirmPassWord:'',
				code:'',
//				smsCode:'',
				isAgree:true,   
				countNum:60,
				showCode:true
      }
    },
		methods: {
     	submit(){
     				let passWordReg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
						let phoneReg=/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
						let mailReg= /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
     				let mail=this.mail;
						let phone = this.phone;
						let passWord=this.passWord;
						let code=this.code;
						let confirmPassWord=this.confirmPassWord;
						let isAgree=this.isAgree;
						
						!isAgree?this.$layer.msg('请同意条件'):'';
						!(passWord===confirmPassWord)?this.$layer.msg('密码必须相同'):'';
						!passWordReg.test(passWord)?this.$layer.msg('密码必须为6-16位并且必须含有字母和数字'):'';
						!phoneReg.test(phone)?this.$layer.msg('请输入正确的手机号码'):'';
						!mailReg.test(mail)?this.$layer.msg('请输入正确的邮箱'):'';
						
						
						let para = {
		          email:mail,
		          phone: phone,
		          password: passWord,
		          code: code,
		        };
		        if( mail&& phone &&passWord&&code&&confirmPassWord&&isAgree){
		        		register(para).then((res)=>{
				      			//console.log(res);
				      			res.code===200?this.$router.push({ path: '/login' }):this.$layer.msg(res.msg);
				      	})
		        }
		  },
    	resetCode(){
				let para = {
         	phone:this.phone
        };
        if(!phoneReg.test(this.phone)){
        	this.$layer.msg('请输入正确的手机号码')
        }else{
        	  this.showCode=false;
						this.countDown();
        		userSms(para).then((res)=>{});
        }
      },
			//倒计时
			countDown(){
				 this.timer=setInterval( ()=>{
						this.countNum--;
						if(this.countNum<0){
							clearInterval(this.timer);
							this.countNum=60;
							$('.resetCode').text('重新发送');
							this.showCode=true;
						}
					}, 1000 );
					
			}
    
    	

    },
    mounted() {
      
    },
    components: {
    	
  	}
  }
</script>

<style lang="scss" scoped>
	.zhuce{
		height: 65px;
		line-height: 65px;
		font-size: 28px;
		color: #000;
		border-bottom:1px solid #f3f3f3;
	}
	.registed{
		padding: 100px 0 300px;
	}
	.register{
		padding-top: 35px;
		div{
			margin-bottom:26px;
			span{
				display: inline-block;
				width:100px;
				text-align: right;
				font-size: 16px;
				color: #323232;
			}
			input {
				width: 270px;
				height: 38px;
				outline: none;
				background: rgba(0,0,0,0);
				border: 1px solid #e6e6e6;
				border-radius: 3px;
				&.code{
					width: 206px;
				}
				&.agree{
					width: 18px;
					height: 18px;
					background: #d00010;
					position: relative;
					top:3px;
				}
			}
			.btn{
				width: 60px;
				height: 38px;
			}
		}
		.register1{
			width: 270px;
			height: 40px;
			margin-top: 20px;
			background: #d00010;
			outline: none;
			border: 0;
			font-size: 14px;
			color: #fff;
		}
	}

</style>

