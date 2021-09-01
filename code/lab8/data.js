new Vue({
	el: '#app',
	data: {
		activeIndex: '1',
		flag: 2,
		input: '',
		options: [{
			value: '选项1',
			label: '贵州'
		}, {
			value: '选项2',
			label: '浙江'
		}, {
			value: '选项3',
			label: '宁夏'
		}, {
			value: '选项4',
			label: '山东'
		}, {
			value: '选项5',
			label: '四川'
		}, {
			value: '选项6',
			label: '北京'
		}],
		options2: [{
			value: '选项1',
			label: '黔西县'
		}, {
			value: '选项2',
			label: '彭阳县'
		}, {
			value: '选项3',
			label: '杭州市'
		}, {
			value: '选项4',
			label: '金华市'
		}, {
			value: '选项5',
			label: '重庆市'
		}, {
			value: '选项6',
			label: '潍坊市'
		}],
		value1: '',
		value2: '',
		value3: '',
		editFormVisible: false,
		editForm: {
			date: '',
			name: '',
			address: ''
		},
		tableData: [{
			date: '2018-01-21',
			name: '许涛',
			address: '贵州省 毕节市 黔西县',
			place: '贵州',
			phone: '13812345678'
		}, {
			date: '1996-10-11',
			name: '黄娟',
			address: '宁夏回族自治区 固原市 彭阳县',
			place: '宁夏',
			phone: '15812345678'
		}, {
			date: '1976-01-27',
			name: '贾磊',
			address: '贵州省 毕节市 黔西县',
			place: '贵州',
			phone: '13812345678'
		}, {
			date: '1999-07-06',
			name: '蔡勇',
			address: '山东省 潍坊市 昌邑市',
			place: '山东',
			phone: '13812345678'
		}, {
			date: '2019-04-01',
			name: '于霞',
			address: '重庆 重庆市 长寿区',
			place: '重庆',
			phone: '13912345678'
		}, {
			date: '1977-06-22',
			name: '马霞',
			address: '重庆 重庆市 万州区',
			place: '重庆',
			phone: '16812345678'
		}, {
			date: '2016-05-07',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			place: '上海',
			phone: '15912345678'
		}]
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		change(index) {
			this.flag = index;
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		handleDelete: function(index, row) {
			this.tableData.splice(index, 1)
		},
		handleEdit: function(index, row) {
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
		}
		// submitEdit: function{
		// 	this.tableData.name = editForm.name;
		// 	this.editFormVisible = false;
		// }
	}
})
