<template>
  <div class="container">
		add{{count}}
		<p style="cursor: pointer; color: blue" @click="handleToHome">back</p>
	</div>
</template>

<script setup="props">
	import { ref, onBeforeMount, onMounted } from 'vue'
	import router from '../../route/index'

	let count = ref(15);

	onBeforeMount(() => {
		console.log('before mount');
	})

	onMounted(() => {
	})

	const handleToHome = () => {
		router.push('/home');
	}
</script>
<style scoped>
.container {
	width: 100%;
	height: 100%;
}
</style>