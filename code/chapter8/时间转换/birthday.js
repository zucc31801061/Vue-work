Vue.directive('birthday', {
	bind: function(el, binding) {
		el.innerHTML = Time.getFormatDates(binding.value);
	},
	unbind: function(el) {
		clearInterval(el._timeout_);
		delete el._timeout_;
	}
})

Vue.directive('updatebirthday', {
	bind: function(el, binding) {
		el.innerHTML = Time.getFormatAges(binding.value);
	},
	unbind: function(el) {
		clearInterval(el._timeout_);
		delete el._timeout_;
	}
})
