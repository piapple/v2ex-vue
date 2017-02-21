import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import content from './component/content.vue';
import Sign_in from './component/sign_in.vue';
import Sign_up from './component/sign_up.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path:'/',
			component:content
		},
		{
			path:'/sign_in',
			component: Sign_in
		},
		{
			path:'/sign_up',
			component: Sign_up
		},
		
	
	]

})
new Vue({
	router:router,
  	el: '#app',
  	render: h => h(App)
})
