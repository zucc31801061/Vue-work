Vue.directive('clickoutside', {
	bind: function(el, binding, vnode) {
		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false;
			}
			if (binding.expression) {
				binding.value(e);
			}
		}

		function handleEsc(e) {
			if (e.keyCode === 27) {
				binding.value(e);
			}
		}

		el.__vueClickOutside__ = documentHandler;
		document.addEventListener('click', documentHandler);
		el.__vueEscOutside__ = handleEsc;
		document.addEventListener('keyup', handleEsc);
	},
	unbind: function(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
		document.removeEventListener('keyup', el.__vueEscOutside__);
		delete el.__vueEscOutside__;
	}
});
