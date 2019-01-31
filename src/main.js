import Vue from 'vue'

import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

import QrcodeStream from "vue-qrcode-reader"
Vue.use(QrcodeStream)

import App from './App.vue'
import router from './router'

import OnlinePlugin from './plugins/online'
Vue.use(OnlinePlugin)

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
