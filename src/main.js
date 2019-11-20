import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import Vuetify from 'vuetify'
import App from './App'

import olympics from './assets/small.json'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')
