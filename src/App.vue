<template>
  <div id="app" >
<vue-progress-bar></vue-progress-bar>
	<weather />

	
  </div>
</template>
<style>

</style>
<script>
import weather from './components/Weather.vue'

export default {
  name: 'app',
  components: {
    weather
  }
}
</script>

