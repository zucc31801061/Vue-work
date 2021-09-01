<template>
	<h1>今天是{{_today}}</h1>
	<h1>收到的子组件传值为{{date}}</h1>
	<my-calendar v-model='date' @change='change'></my-calendar>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const today = new Date();
	let _today = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();
	let date = ref(_today);
	const change = (...arg) => {
		console.log(arg);
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	h1{
		margin-bottom: 20px;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
