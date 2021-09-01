import calendar from './calendar.vue'

function install (vue) {
	vue.component('my-calendar', calendar)
}

export default {
	install
}
