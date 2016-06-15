var Vue = require('vue');

var testview = require('./views/testview.vue');

app = new Vue({
	el: '#app',
	components: {
		'testview': testview
	}
});