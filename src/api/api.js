/**
 * Created by jerry on 2017/4/13.
 */
import axios from 'axios'

let base = '/api'

/*获取图片验证码*/
//export const  verificationCode = params => { return axios.get(`${base}/kaptcha`, params).then(res => res.data) }
export const  verificationCode = params => { return `${base}/kaptcha` }

/*用户登录*/
export const userlogin = params => { return axios.post(`${base}/userlogin`, params).then(res => res.data) }

/*用户注册*/
export const  register = params => { return axios.post(`${base}/register`, params).then(res => res.data) }

/*用户注册手机验证码*/
export const  userSms = params => { return axios.get(`${base}/SMS/getRegistered`, {params}).then(res => res.data) }

/*用户修改密码手机验证码*/
export const  passwordSms = params => { return axios.get(`${base}/SMS/updatePassword`, {params}).then(res => res.data) }

//忘记密码第一步
export const  confirmAccount = params => { return axios.post(`${base}/confirmAccount`, params).then(res => res.data) }

//忘记密码第二步
export const  securityVerification = params => { return axios.post(`${base}/securityVerification`, params).then(res => res.data) }

//忘记密码第三步密码重置
export const  resetPassword = params => { return axios.post(`${base}/resetPassword`, params).then(res => res.data) }
//工业用锁解决方案列表
export const  solutionList = params => { return axios.get(`${base}/solution/list`, {params}).then(res => res.data) }
//工业用锁解决方案详情
export const  solutionDetail = params => { return axios.get(`${base}/solution/detail`, {params}).then(res => res.data) }
//解决方案对应产品
export const  solutionToProducts = params => { return axios.get(`${base}/solution/solutionToProducts`, {params}).then(res => res.data) }
//解决方案对应视频
export const  solutionToVideo = params => { return axios.get(`${base}/solution/solutionToVideo`, {params}).then(res => res.data) }
// 工业用锁技术支持
export const  technical = params => { return axios.get(`${base}/technical`, {params}).then(res => res.data) }
// 获取技术支持列表
export const  technicalList = params => { return axios.get(`${base}/technical/list`, {params}).then(res => res.data) }

// 技术支持详情
export const  technicalDetail = params => { return axios.get(`${base}/technical/detail`, {params}).then(res => res.data) }
//工业  视频
export const  industryVideo = params => { return axios.get(`${base}/video/list`, {params}).then(res => res.data) }

//获取产品分类树
export const  tree = params => { return axios.get(`${base}/category/tree`, {params}).then(res => res.data) }


// 获取产品列表
export const  productList = params => { return axios.get(`${base}/product/list`, {params}).then(res => res.data) }

// 获取产品详情
export const  productDetails = params => { return axios.get(`${base}/product/detail`, {params}).then(res => res.data) }

//资料下载
export const  dataDownload = params => { return axios.get(`${base}/database/list`, {params}).then(res => res.data) }
//在线提交问题反馈
export const  feedbackAdd = params => { return axios.post(`${base}/feedback/feedback_add`, params).then(res => res.data) }
//客户需求控制器
export const  needAdd = params => { return axios.post(`${base}/need/need_add`, params).then(res => res.data) }

//搜索
// 搜索产品列表
export const  searchProductList = params => { return axios.get(`${base}/search/productList`, {params}).then(res => res.data) }
// 搜索解决方案列表
export const  searchSolutionList = params => { return axios.get(`${base}/search/solutionList`, {params}).then(res => res.data) }
// 搜索技术支持列表
export const  searchTechnicalList = params => { return axios.get(`${base}/search/technicalList`, {params}).then(res => res.data) }

