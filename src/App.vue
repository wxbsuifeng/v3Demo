<template>
  <fit-layout>
    <router-view></router-view>
  </fit-layout>
</template>

<script>
	import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

	export default {
		name: 'app',
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
  * {
    padding: 0;
    margin: 0;
  }
</style>