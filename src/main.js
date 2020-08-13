import Vue from 'vue';
import App from './App.vue';
import reactiveStorage from 'vue-reactive-storage';

import 'normalize.css';
import '@/styles/base.css';

Vue.config.productionTip = false;

Vue.use(reactiveStorage, {
  "posts": 'foo',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
