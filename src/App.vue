<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div class="tw-flex-col-center">
		<div class="tw-card p-4 tw-flex-center w-24 gap-2">
			<a href="https://vitejs.dev" target="_blank">
				<img src="/vite.svg" class="logo" alt="Vite logo" />
			</a>
			<a href="https://vuejs.org/" target="_blank">
				<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
			</a>
		</div>
		<HelloWorld msg="Vite + Vue" />
	</div>
</template>

<style>
body {
	background-color: #303030;
	font-family: Roboto, Helvetica, Arial, sans-serif;
	color: white;
	text-align: center;
}
</style>
