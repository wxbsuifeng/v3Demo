<template>
  <button @click="addFunc">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.{{ count }}</p>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, reactive, toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const data = reactive({
      count: 0,
      addFunc: () => {
        data.count++;
      }
    })
    const refData = toRefs(data);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    
    onMounted(() => {
      console.log('onMounted----', data.count);
    })

    onBeforeUnmount(() => {
      console.log('beforeUnmount----');
    })

    return {
      ...refData
    }
  }
}
</script>
