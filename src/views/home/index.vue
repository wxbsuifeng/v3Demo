<template>
	<div class="header">
		home-header
		<span @click="hanldeToAdd" style="color: blue; cursor: pointer;">toAdd</span>
	</div>
	<div class="container">
		<el-table
      :data="tableData"
      style="width: 100%"
			height="1340px"
			border
		>
      <el-table-column
        prop="date"
        label="日期"
			>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
			>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
			>
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
	import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
	import router from "../../route"

	export default {
		name: 'home',
		setup() {
			const data = reactive({
				tableData:
				[
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					},
					{
						date: '2002 10-24',
						name: 'zhangsan',
						address: 'lisi'
					}
				]
			})
			const refData = toRefs(data);

			onBeforeMount(() => {
			})

			onMounted(() => {
			})

			const hanldeToAdd = () => {
				console.log();
				router.push('/add');
			}

			return {
				...refData,
				hanldeToAdd
			}
		}
	};
</script>
<style scoped>
	.header {
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		background-color: lightgray;
		box-sizing: border-box;
	}
	.container {
		width: 100%;
		height: 1340px;	
		box-sizing: border-box;
		background-color: lightsteelblue;
	}
</style>