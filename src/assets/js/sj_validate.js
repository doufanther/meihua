//必填
function isRequired(obj){
	var form_length=$(obj).val().length;
	var feedback=$(obj).parents(".form-group1").next().next();
	if(form_length=="0"){
		return false;
	}
}
//验证字母
function isLetter(obj){
	var isLetter= new RegExp(/^[A-Za-z]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();

	if(!isLetter.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}
//验证中文
function isChinese(obj){
	var isChinese= new RegExp(/^[\u4e00-\u9fa5]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();

	if(!isChinese.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}
//验证全角字符串
function isAnglestring(obj){
	var isAnglestring= new RegExp(/^[\uFF00-\uFFFF]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();

	if(!isAnglestring.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证特殊字符串(字符符号)
function isSpecialstring(obj){
	var isSpecialstring= new RegExp(/^[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();

	if(!isSpecialstring.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证数字
function isNumber(obj){
	var isNumber= new RegExp(/^[\d]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();

	if(!isNumber.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证数字最大最小值
function isNumber(obj){
	var isNumber= new RegExp(/^[\d]+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();
	var max_val=$(obj).attr("max");
	var min_val=$(obj).attr("min");

	if(!isNumber.test(form_val)){
		return false;
	}else if(form_val==""||form_val>max_val){
		return false;
	}else if(form_val==""||form_val<min_val){
		return false;
	}else {
		return true;
	}
}

//验证电子邮箱
function isEmail(obj){
	var isEmail= new RegExp(/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();
	if(!isEmail.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证手机号码
function isMobile(obj){
	var isMobile= new RegExp(/^1[34578]\d{9}$/);
	var form_val=$(obj).val();
	var feedback=$(obj).parents(".form-group1").next().next();
	if(!isMobile.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证身份证
function isIdentity(obj){
	var isIdentity= new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);
	var form_val=$(obj).val();
	var feedback=$(obj).parents(".form-group1").next().next();
	if(!isIdentity.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}

//验证邮政编码
function isPostcode(obj){
	var isPostcode= new RegExp(/^\d{6}$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();
	if(!isPostcode.test(form_val)){
		return false;
	}
	else if($(obj).val().length=="0"){
		return true;
	}
	else{
		return true;
	}
}
//验证数值大小
function validateValue(obj){
	var form_val=$(obj).val();
	var max_val=$(obj).attr("max");
	var min_val=$(obj).attr("min");
	var feedback=$(obj).next();
	if(form_val==""||form_val>max_val){
		return false;
	}else if(form_val==""||form_val<min_val){
		return false;
	}else {
		return true;
	}
}
//验证数值长度
function validateLength(obj){
	var form_length=$(obj).val().length;
	var max_length=$(obj).attr("max_length");
	var min_length=$(obj).attr("min_length");
	var feedback=$(obj).next();
	if(form_length=="0"){
		return false;
	}else if(form_length>max_length){
		return false;
	}else if(form_length<min_length){
		return false;
	}else {
		return true;
	}
}
//验证数值小数 小数点位数限制
function validateDecimal(obj){
	var dec_min_length=$(obj).attr("dec_min_length");
	var dec_max_length=$(obj).attr("dec_max_length");
	var dec_length=$(obj).attr("dec_length");
	var isDecimal= new RegExp(/^[0-9]+(.[0-9]{2})?$/);
	var form_val=$(obj).val();
	var feedback=$(obj).next();
	if(!isDecimal.test(form_val)){
		return false;
	}
	else{
		return true;
	}
}
//验证两次密码输入是否一致
function validateMatch(obj){
	var to_obj=$(obj).attr("match");
	var to_val=$(to_obj).val();
	var form_val=$(obj).val();
	var feedback=$(obj).parents(".form-group1").next().next();
	if(form_val!==to_val){
		return false;
	}
	else{
		return true;
	}
}
$(document).ready(function(){
	//密码强度
	$('#password').keyup(function(e) {
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");//8位以上密码，同时含大写字母和小写字母，含特殊字符
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");//7位以上密码，含大写字母、小写字母、特殊字符中的一种
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");//6位以上密码
            

		var feedback=$(this).next();
    	if(false == enoughRegex.test($(this).val())) {
			return false;
	    }else if(strongRegex.test($(this).val())) {
			return true;
	    }else if(mediumRegex.test($(this).val())) {
			return true;
	    }else{
			return true;
	    }
	});
});