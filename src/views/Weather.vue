<template>
  <div class="flex items-center justify-center h-screen bg-orange-400">
    <!-- modal -->
    <div class="bg-white text-white font-bold rounded-md border shadow-xl w-auto ">
      <weather-form v-on:getCity="loadData" />
      <weather-info ref ="weatherInfo" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WeatherForm from "../components/WeatherForm.vue";
import WeatherInfo from "../components/WeatherInfo.vue";
export default {
  components: {
    WeatherForm,
    WeatherInfo
  },
  data() {
    return {
      WeatherInfo:''
    }
  },
  methods: {
    loadData(city='casablanca') {
      this.$Progress.start();
      axios
        .get(
          "http://api.weatherstack.com/current?access_key=7004accbfcf1b482aed770da488b3e85&query=" +
            city
        )
        .then((res) => {
          this.WeatherInfo=res.data
          this.$refs.weatherInfo.showData(res.data)
          this.$Progress.finish();
        })
        .catch((err) => console.error(err));
    },
  },
  created() {
    this.$Progress.start();
    this.loadData();
    this.$Progress.finish();
  },
};
</script>

<style></style>
