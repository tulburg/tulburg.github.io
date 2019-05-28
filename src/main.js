// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'


import main from "./assets/js/main"

Vue.config.productionTip = false
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function() {
  	
  },
  mounted: function(){
  	// main.runOnLoadComplete();
   //  main.runOnLoad();
  	// main.startScrollController();
  },
  methods: {
  	$: function(id) {
			if(id[0] == ".") return (this) ? (this.getElementsByClassName(id.substring(1)).length == 1) ? this.getElementsByClassName(id.substring(1))[0] : this.getElementsByClassName(id.substring(1)) : (document.getElementsByClassName(id.substring(1)).length == 1) ? document.getElementsByClassName(id.substring(1))[0] : document.getElementsByClassName(id.substring(1));
			if(id[0] == "#") return (this) ? this.getElementById(id.substring(1)) : document.getElementById(id.substring(1));
			if(id[0] == ">") return (this) ? (this.getElementsByTagName(id.substring(1)).length == 1) ? this.getElementsByTagName(id.substring(1))[0] : this.getElementsByTagName(id.substring(1)) : (document.getElementsByTagName(id.substring(1)).length == 1) ? document.getElementsByTagName(id.substring(1))[0] : document.getElementsByTagName(id.substring(1));
			return undefined;
		}
  }
})

Element.prototype.hasClass = function(c) { return (this.className.match(c)) }
Element.prototype.addClass = function(c) { if(!this.className.match(c)) this.className = this.className+" "+c; }
Element.prototype.removeClass = function(c) { return this.className = this.className.replace(" "+c, ""); }
window.Element.prototype.$ = window.$ = function(id) {
	if(id[0] == ".") return (this) ? (this.getElementsByClassName(id.substring(1)).length == 1) ? this.getElementsByClassName(id.substring(1))[0] : this.getElementsByClassName(id.substring(1)) : (document.getElementsByClassName(id.substring(1)).length == 1) ? document.getElementsByClassName(id.substring(1))[0] : document.getElementsByClassName(id.substring(1));
	if(id[0] == "#") return (this) ? this.getElementById(id.substring(1)) : document.getElementById(id.substring(1));
	if(id[0] == ">") return (this) ? (this.getElementsByTagName(id.substring(1)).length == 1) ? this.getElementsByTagName(id.substring(1))[0] : this.getElementsByTagName(id.substring(1)) : (document.getElementsByTagName(id.substring(1)).length == 1) ? document.getElementsByTagName(id.substring(1))[0] : document.getElementsByTagName(id.substring(1));
	return undefined;
}