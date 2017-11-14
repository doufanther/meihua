// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store.js'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);
import App from './App'

import $ from 'jquery'
import './assets/css/bootstrap.min.css'

import './assets/css/normalize.css'
import './assets/js/bootstrap.min'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/common.css'
import './assets/css/iconfont.css'

import router from './router'
Vue.use(iView);

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

