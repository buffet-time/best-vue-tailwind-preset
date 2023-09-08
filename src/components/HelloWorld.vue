<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
	<div class="tw-flex-col-center m-4">
		<h1 class="tw-h1">{{ msg }}</h1>

		<div class="card">
			<button class="tw-button" type="button" @click="count++">
				count is {{ count }}
			</button>
		</div>

		<div class="tw-card p-4">
			<p>
				Install
				<a
					class="text-green-600 underline"
					href="https://github.com/vuejs/language-tools"
					target="_blank"
				>
					Volar
				</a>
				in your IDE for a drastically better DX
			</p>
		</div>
	</div>
</template>
