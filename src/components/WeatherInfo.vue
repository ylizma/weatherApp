<template>
  <div v-show="weather" class="text-black">
    <div>
      <center>
        <h6 class="font-mono" >{{weather.location.localtime}}</h6>
        <img :src="weather.current.weather_icons[0]" class="py-4 mx-auto" />
        <h1 class="text-4xl">{{weather.current.temperature}}°</h1>
        <h4 class="text-2xl">{{weather.current.weather_descriptions[0]}}</h4>
      </center>
    </div> 

    <div >
      <center>
        <h6 style="">
          {{weather.location.name}} , {{weather.location.country}}
        </h6>
      </center>
    </div>

    <div class="mt-4 px-5 pb-3">
      <small>humidity : {{weather.current.humidity}} %</small>
      <br />
      <small>wind speed: {{weather.current.wind_speed}} km/h </small>
      <br />
      <small>pressure: {{weather.current.pressure}} </small>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weather:''
    }
  },
  methods: {
    showData(data){
      this.weather = data
    }
  },
};
</script>
