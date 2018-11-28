import Vue from 'vue';
import APP from './About2.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(APP),
}).$mount('#app');
