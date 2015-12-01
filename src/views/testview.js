var Vue = require('vue');

var component = Vue.extend({
	template: '<h1>{{message}}</h1>',
	data: function(){
		return {message: 'Hello, world!'};
	}
});

Vue.component('testview', component);

module.exports = component;