import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView)

// new Vue({
//   el: '#app',
//   component: { App },
//   template: '<App/>'
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
