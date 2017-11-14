<template>
  	<div class="container">
  		<div class="row">
  			<Breadcrumb separator=">">
		        <BreadcrumbItem href="/">首页</BreadcrumbItem>
		        <BreadcrumbItem href="/AboutUs">走进梅花</BreadcrumbItem>
		        <BreadcrumbItem href="/contactUs">联系我们</BreadcrumbItem>
		    </Breadcrumb>
  		</div>
  		<div class="contactUs row">
  			联系我们
  		</div>
  		<div class="map row">
  				<div class="col-lg-7 col-md-7 col-xs-7">
  					<div id="container"></div>
  				</div>
  				<div class="col-lg-5 col-md-5 col-xs-5">
  					<h4>梅花智能锁客户服务联系方式</h4>
  					<div class="txt">
  						<div class="txt-left">
  							售前咨询：
  						</div>
  						<div class="txt-right">
  							<p>邮箱：hzblossom@126.com</p>
  							<p>电话：0571-88888888</p>
  							<p>电话：0571-88866666</p>
  						</div>
  					</div>
  					<div class="txt">
  						<div class="txt-left">
  							商务合作：
  						</div>
  						<div class="txt-right">
  							<p>邮箱：hzblossom@126.com</p>
  							<p>电话：0571-88888888</p>
  						</div>
  					</div>
  					<div class="txt">
  						<div class="txt-left">
  							解决方案咨询：
  						</div>
  						<div class="txt-right">
  							<p>邮箱：hzblossom@126.com</p>
  							<p>电话：0571-88888888</p>
  						</div>
  					</div>
  					<div class="txt">
  						<div class="txt-left">&nbsp;</div>
  						<div class="txt-right">
  							<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=439339317&site=qq&menu=yes">
		  						<div class="qq"><img src="../../../static/img/qq.png"/></div>
		  					</a>
  						</div>
  					</div>
  				</div>
  		</div>
  	</div>
</template>
<script>
	
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
//   	var map = new BMap.Map("container");    
//		var point = new BMap.Point(120.1862830000, 30.1937580000);    
//		map.centerAndZoom(point, 16);  // 编写自定义函数，创建标注   
//	  	map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
//		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//		var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {  
//                  offset: new BMap.Size(11, 25), // 指定定位位置  
//                  imageOffset: new BMap.Size(0, 0 - 11 * 25) // 设置图片偏移  
//              });  
//	
//		var marker = new BMap.Marker(point, {icon: myIcon});    
//		map.addOverlay(marker);    
//
//		var opts = {
//		  position : point,    // 指定文本标注所在的地理位置
//		  offset   : new BMap.Size(0, -30)    //设置文本偏移量
//		}
	  //初始化地图对象，加载地图
	    var map = new AMap.Map("container", {
	        resizeEnable: true,
	        center: [120.1797900000, 30.1884800000],//地图中心点
	        zoom: 13 //地图显示的缩放级别
	    });
	     var marker = new AMap.Marker({
	        position: map.getCenter()
	    });
	    marker.setMap(map);
	    // 设置鼠标划过点标记显示的文字提示
	    marker.setTitle('杭州梅花智能锁科技有限公司');
	
	    // 设置label标签
	    marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
	        content: "杭州梅花智能锁科技有限公司"
	    });
    },
    components: {
    	
  	}
  }
</script>

<style lang="scss" scoped>
	#container{width:610px;height:404px;}
	.contactUs{
		height: 65px;
		line-height: 65px;
		font-size: 28px;
		color: #000;
		border-bottom:1px solid #f3f3f3;
	}
	.map{
		padding: 100px 0 300px;
		box-sizing: border-box;
		height: 900px;
		.col-lg-7 {
			height: 100%;
			border-right:1px solid #F3F3F3;
			padding-top: 50px;
		}
		.col-lg-5{
			padding-left: 150px;
			padding-top:30px;
		}
	}
	h4{font-size: 16px;color: #323232;padding-left: 75px;}
	.txt{overflow: hidden;margin-top: 51px;font-size: 14px;color: #323232;}
	.txt-left{float: left;width: 150px;text-align: right;}
	.txt-right{float: left;}
	.qq{
		width: 122px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		background: #d00010;
		color: #fff;	
	}
</style>

