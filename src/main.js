import Vue from 'vue'

import App from './App.vue'
//import axios from 'axios';
//import VueAxios from 'vue-axios';
import * as VeeValidate from 'vee-validate';
//import  VeeValidate  from "vee-validate";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
/* import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js' */
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import Vue2Filters from 'vue2-filters';
import VueCarousel from 'vue-carousel';
import VueSimpleAlert from "vue-simple-alert";
import VueLoading from 'vuejs-loading-plugin'


Vue.use(VueLoading, {
  blue: true, 
  text: 'Loading', 
  loading: false,
  //customLoader: myVueComponent,
  background: 'rgb(255,255,255)',
  classes: ['myclass'] 
})

Vue.use(VueSimpleAlert);
Vue.use(VueCarousel);
Vue.use(VueSimpleAccordion);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate);
Vue.use(Vue2Filters)
//Vue.use(VueAxios, axios);
//Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */
// new Vue({
//   validations: {},
//   render: h => h(App),
//   //store, 
//   router,
//   components: { App }
// }).$mount('#app')
new Vue({
  el: '#app',
  validations: {},
  render: h => h(App),
  router,
  components: { App },

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
})