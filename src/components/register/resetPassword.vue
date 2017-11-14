<template>
  	<div class="container">
  		<div class="row">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/resetPassword">忘记密码</BreadcrumbItem>
		    </Breadcrumb>
  		</div>
  		<!--<p >当前正在进行第 {{ current + 1 }} 步</p>-->
  		<div class="step">
  			<Steps :current="current">
		        <Step title="确认账号"></Step>
		        <Step title="安全验证"></Step>
		        <Step title="重置密码"></Step>
		    </Steps>
  		</div>
	   
	    <div class="step1" v-show="step1">
	    	<div>
	    		<span>手机号</span>
	    		<input type="text" placeholder="" v-model="account"/>
	    	</div>
	    	<div>
	    		<span>验证码</span>
	    		<input type="text" v-model="kaptcha" />
	    		<span @click="changeCode"> <img :src="codeImg" /></span>
	    	</div>
	    	<div class="text-center">
	    		<Button type="primary" @click="oneStep">下一步</Button>
	    	</div>
	    </div>
	    <div class="step2" v-show="step2">
	    	<div>为了你账号安全，请完成身份验证</div>
	    	<div>
	    		<span>手机号：</span>
	    		<span>{{account}}</span>
	    	</div>
	    	<div>
	    		<span>验证码：</span>
	    		<input type="text" placeholder="" v-model="code" />
	    		<button class="btn btn-default"  :disabled="!showCode">
					<span class="resetCode" v-if="showCode" @click="resetCode">验证码</span>
					<span class="countDown" v-else>{{countNum}}s</span>
				</button>
	    	</div>
	    	<div class="text-center">
	    		<Button type="primary" @click="twoStep">下一步</Button>
	    	</div>
	    </div>
	    <div class="step3" v-show="step3">
	    	<div>
	    		<span>新密码</span>
	    		<input type="password" placeholder="" v-model="password"/>
	    	</div>
	    	<div>
	    		<span>确认密码</span>
	    		<input type="password" placeholder="" v-model="password1"/>
	    	</div>
	    	<div class="text-center">
	    		<Button type="primary" @click="finish">完成</Button>
	    	</div>
	    </div>
	    
  	</div>
</template>
<script>
	import {verificationCode,confirmAccount,passwordSms,securityVerification,resetPassword} from '../../api/api';
 export default{
   	created(){
			this.codeImg=verificationCode();
 	},
    data(){
      return {
         current: 0,
         step1:true,
         step2:false,
         step3:false,
         showCode:true,
         countNum:60,
         timer: null,
         codeImg:'',
         account:'',
         kaptcha:'',
         code:'',
         //checkcode:'',
         password:'',
         password1:''
      }
    },
	methods: {
    	next () {
	        if (this.current == 2) {
	            this.current = 0;
	        } else {
	            this.current += 1;
	        }
      	},
        oneStep(){
     		let para={
				account:this.account,
				kaptcha:this.kaptcha 
			};
     		confirmAccount(para).then((res)=>{
     			if(res.code===200){
     				this.step1=false;
     				this.step2=true;
       				this.next();
     			}else if(res.code===400){
     				 this.$layer.msg(res.msg);
     				 this.changeCode();
     			}else{
     				this.$layer.msg(res.msg);
     			}
     		})
        },
        twoStep(){

			let para={
				phone:this.account,
				code:this.code,
			};
			securityVerification(para).then((res)=>{
     			if(res.code===200){
       				this.step1=false;
		     		this.step2=false;
		     		this.step3=true;
		     		this.next();
     			}else{
     				 this.$layer.msg(res.msg);
     			}
     		})
        },
        resetCode(){
     		this.showCode=false;
//   		this.countNum--;
     		this.countDown();
     		let para = {
         		phone:this.account
        	};
     		passwordSms(para).then((res)=>{
     			
     		})
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
			
		},
		changeCode(){
			let num= parseInt(Math.random()*1000+1);
			this.codeImg=verificationCode()+'?'+num;
		},
		finish(){
			let para = {
				account:this.account,
         		password:this.password
        	};
     		if(this.password===this.password1){
     			resetPassword(para).then((res)=>{
	     			if(res.code===200){
	     				this.$layer.msg('密码已修改');
	     				this.$router.push({ path: '/login' });
	     			}
	     		})
     		}else{
     			this.$layer.msg('请确保密码一致');
     		}
		}
    },
    mounted() {
      
    },
    components: {
    	
  	},
  	computed:{
  		
  	}
  }
</script>

<style lang="scss" scoped>
	.container{padding-bottom: 450px;}
	.step{
		width: 80%;
		margin: 50px auto;
	}
	.step1,.step2,.step3{
		width: 400px;
		margin: 0 auto;
		div{
			margin-bottom: 25px;
			.btn{
				height: 38px;
			}
		}
		input{
			height: 38px;
			outline: none;
			border: 1px solid #e6e6e6;
			border-radius:3px ;
		}
	}
</style>

