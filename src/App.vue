<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <weather />
  </div>
</template>
<script>
import weather from "./views/Weather.vue";
export default {
  name: "app",
  components: {
    weather,
  },
};
</script>
