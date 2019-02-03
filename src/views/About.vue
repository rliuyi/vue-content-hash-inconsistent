<template>
  <div>
    <button @click="show=true">Load Tooltip</button>
    <tooltip v-if="show"></tooltip>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  components: {
    Tooltip: () => import(/* webpackChunkName: "tooltip" */ "@/components/Tooltip")
  }
};
</script>
