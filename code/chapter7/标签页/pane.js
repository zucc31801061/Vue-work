Vue.component('pane', {
	name: 'pane',
	template: '\
		<transition name = "fade"> \
			<div :class="getCls()">\
				<slot></slot> \
			</div> \
		</transition>',
	props: {
		name: {
			type: String
		},
		label: {
			type: String,
			default: ''
		},
		closable: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			show: true
		}
	},
	methods: {
		updateNav() {
			this.$parent.updateNav();
		},
		getCls() {
			return [
				'pane',
				{
					'pane-active': this.show
				}
			]
		}
	},
	watch: {
		label() {
			this.updateNav();
		}
	},
	mounted() {
		this.updateNav();
	}
})
