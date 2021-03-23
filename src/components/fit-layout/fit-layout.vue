<template>
  <div class="fit-layout" :style="appStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted, computed, watch } from 'vue'

  const DesignSize = {
    width: 2560,
    height: 1440
  }

  const getViewScale = userDesignsize => {
    return {
      x: window.innerWidth / (userDesignsize || DesignSize).width,
      y: window.innerHeight / (userDesignsize || DesignSize).height
    }
  }

  export default {
    name: 'fit-layout',
    props: {
      designSize: Object
    },
    setup(props, context) {
      const data = reactive({
        viewSize: {
          height: (props.designSize || DesignSize).height,
          width: (props.designSize || DesignSize).width
        },
        viewScale: getViewScale(),
      });
      const refData = toRefs(data);

      const appStyle = computed(() => {
        return {
          width: `${data.viewSize.width}px`,
          height: `${data.viewSize.height}px`,
          transform: `scale(${data.viewScale.x}, ${data.viewScale.y})`
        }
      })

      onBeforeMount(() => {
      })

      onMounted(() => {
        resetWindow();
        window.onresize = resetWindow;
      })

      const resetWindow = () => {
        data.viewScale = getViewScale(props.designSize);
      }

      watch(() => props.designSize, () => {
        resetWindow();
      });
  
      return {
        ...refData,
        appStyle
      }
    }
  };
</script>
<style scoped>
.fit-layout {
  transform-origin: left top;
  height: 100%;
  width: 100%;
}
</style>
