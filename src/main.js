import Vue from 'vue';
import App from './App.vue';

import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  // eslint-disable-next-line arrow-parens
  render: (h) => h(App),
}).$mount('#app');
