<template>
	<div class="calendar_box">
		<div class="title_box">
			<span class="prev_year_btn btn" @click="prevYear">&lt;&lt;</span>
			<span class="prev_month_btn btn" @click="prevMonth">&lt;</span>
			<span class="time_box">{{state.timeStr}}</span>
			<span class="next_month_btn btn" @click="nextMonth">&gt;</span>
			<span class="next_year_btn btn" @click="nextYear">&gt;&gt;</span>
		</div>

		<ul class="weekly_box">
			<li v-for="item in week">{{item}}</li>
		</ul>

		<ul class="day_box" v-for="item in state.dayAry">
			<li :class="{gray:!val.cur,isSelect:val.isSelect}" v-for="val in item" @click="getDate(val)">{{val.text}}</li>
		</ul>
	</div>
</template>

<script setup>
	import {
		defineEmit,
		defineProps,
		onMounted,
		reactive,
		watch
	} from "vue";

	let props = defineProps({
		modelValue: String,
	})

	const week = ["日", "一", "二", "三", "四", "五", "六"];
	let state = reactive({
		dayAry: [],
		timeStr: "",
		comp_time:props.modelValue,
	});

	let emit = defineEmit(["change", "update:modelValue"]);

	//value '2021/5/1'
	function getRenderData(value) {
		let dayAry = [];

		function getDayNum(str) {
			let arr = str.split('/');
			let y = arr[0],
				m = arr[1];
			return [new Date(y, m, 0).getDate(), new Date(y, m - 1, 1).getDay()]
		}
		let [nums, first] = getDayNum(value);
		let n = 1;
		let nextMonthDay = 1;
		
		function getLastMonthDays(str){
			let arr = str.split('/');
			let y = arr[0],m = arr[1];
			let date = new Date(y,m-1,1);
			return new Date(date.getFullYear(),date.getMonth(),0).getDate();
		}
		
		let prevMonthDay = getLastMonthDays(value);
		
		for (let i = 0; i < 6; i++) {
			let temp = [];
			for (let j = 0; j < 7; j++) {
				if (i == 0) {
					if (j < first) {
						temp.unshift({
							isSelect: false,
							cur: false,
							text: prevMonthDay--,
						});
					} else {
						let obj = {
							isSelect: false,
							cur: true,
							text: n++,
						};
						if(obj.text == value.split('/')[2]){
							obj.isSelect = true;
						}
						temp.push(obj);
					}
				} else {
					let t = n++;
					if (t > nums) {
						temp.push({
							isSelect: false,
							cur: false,
							text: nextMonthDay++,
						});
					} else {
						let obj = {
							isSelect: false,
							cur: true,
							text: t,
						};
						if(obj.text == value.split('/')[2]){
							obj.isSelect = true;
						}
						temp.push(obj);
					}
				}
			}
			dayAry.push(temp);
		}
		return dayAry;
	}

	function renderTitle(str) {
		let arr = str.split('/');
		state.timeStr = arr[0] + "年" + arr[1] + "月" + arr[2] + "日";
		state.dayAry = getRenderData(str);
	}

	watch(() => props.modelValue, (str) => {
		state.comp_time = str;
		renderTitle(str);
	});
	
	watch(() => state.comp_time, (str) => {
		renderTitle(str);
	});

	const prevYear = ()=>{
		let arr = state.comp_time.split('/');
		arr[0]--;
		arr[2] = 1;
		state.comp_time = arr.join('/');
		state.dayAry = getRenderData(state.comp_time);
	};
	
	const prevMonth = ()=>{
		let arr = state.comp_time.split('/');
		let m = arr[1]/1;
		if(m-1<=0){
			arr[1] = 12;
			arr[0]--;
		}
		else{
			arr[1]--;
		}
		arr[2] = 1;
		state.comp_time = arr.join('/');
		state.dayAry = getRenderData(state.comp_time);
	};
	
	const nextMonth = ()=>{
		let arr = state.comp_time.split('/');
		let m = arr[1]/1;
		if(m+1>=13){
			arr[1] = 1;
			arr[0]++;
		}
		else{
			arr[1]++;
		}
		arr[2] = 1;
		state.comp_time = arr.join('/');
		state.dayAry = getRenderData(state.comp_time);
	};
	
	const nextYear = ()=>{
		let arr = state.comp_time.split('/');
		arr[0]++;
		arr[2] = 1;
		state.comp_time = arr.join('/');
		state.dayAry = getRenderData(state.comp_time);
	};
	
	const getDate = (val)=>{
		if(val.cur){
			let arr = state.comp_time.split('/');
			arr[2] = val.text;
			emit("update:modelValue", arr.join('/'));
		}
	}
	
	state.dayAry = getRenderData(props.modelValue);
	renderTitle(props.modelValue);
</script>

<style lang="less">
	.calendar_box {
		width: 400px;
		position: relative;
		margin: auto;

		.title_box {
			height: 50px;
			display: flex;
			width: 300px;
			margin: auto;

			.btn {
				width: 30px;
				font-size: 20px;
				font-weight: 600;
				cursor: pointer;
			}

			.time_box {
				flex: auto;
			}
		}

		.weekly_box,
		.day_box {
			padding: 5px 10px;
			box-sizing: border-box;
			display: flex;

			li {
				flex: 1;
				cursor: pointer;
			}
		}

		.weekly_box {
			border: 1px solid #ccc;
			border-left: none;
			border-right: none;
		}

		.day_box {
			li {
				padding: 10px 0;
			}

			li.gray {
				color: #ccc;
				cursor: no-drop;
			}

			li.isSelect {
				background-color: blue;
				color: #fff;
			}
		}
	}
</style>
