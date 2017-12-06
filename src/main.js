// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import main from "./assets/js/main"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function() {
  	
  },
  mounted: function(){
  	main.runOnLoadComplete();
    main.runOnLoad();
  	main.startScrollController();
  }
})
