<template>
  <div style="width: 300px; height: 300px; background-color: red;">home</div>
</template>

<script>
	import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

	export default {
		name: 'home',
		setup() {
			const data = reactive({

			})
			const refData = toRefs(data);

			onBeforeMount(() => {
			})

			onMounted(() => {
			})

			return {
				...refData,
			}
		}
	};
</script>
<style scoped>
</style>