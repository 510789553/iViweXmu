// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iView'
import 'iView/dist/styles/iview.css'

import { Button, Table } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
