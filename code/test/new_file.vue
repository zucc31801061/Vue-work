<template>
	<div>
		<p>我是段落</p>
		<p>{{msg}}</p>
	</div>

</template>

<script>
	import {
		createVNode as _createVNode,
		toDisplayString as _toDisplayString,
		openBlock as _openBlock,
		createBlock as _createBlock
	} from "vue"

	//生成静态节点
	const _hoisted_1 = /*#__PURE__*/ _createVNode("p", null, "我是段落", -1 /* HOISTED */ )

	//动态节点
	export function render(_ctx, _cache, $props, $setup, $data, $options) {
		return (_openBlock(), _createBlock("div", null, [
			_hoisted_1, //静态节点复用
			_createVNode("p", null, _toDisplayString(_ctx.msg), 1 /* TEXT */ )
		]))
	}
</script>

<style>
</style>
