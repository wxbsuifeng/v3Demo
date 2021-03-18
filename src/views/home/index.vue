<template>
  <div></div>
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