import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = { //一般通过外部文件引入的，东西很多的。
  //定义数据 --- 类似data
  isLogin: false,//生成了一个静态的常量
	account:''
}
const mutations = {
  //定义方法 --- 类似methods
  login(state){//state 是把上面的数据引入进来的
    state.isLogin=true;
  },
  logout(state){
    state.isLogin=false;
  },
  loguser(state,account){
  	state.account=account;
  }
}
export default new Vuex.Store({
  state,
  mutations
});