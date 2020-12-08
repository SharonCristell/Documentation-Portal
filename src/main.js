import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router/dist/vue-router.js'
import routes from './routes.js';
import Transitions from 'vue2-transitions'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import VueAffix from 'vue-affix'

Vue.use(VueAffix)
Vue.use(VueRouter)
Vue.use(Transitions)

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false


window.Vue = new Vue({
  render: h => h(App),
  router,
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$store.dispatch("setUpStore")
  },
  mounted() {
    this.loading = false
  }
}).$mount('#app')