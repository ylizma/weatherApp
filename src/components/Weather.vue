<template>
	<div style="">
		<div class="container">
		<div class="contain">
	
			<div class="inp">
			<form class="form-inline ">
      <input class="form-control " type="search" placeholder="Search" aria-label="Search" style="width: 400px;" v-model="city">
      <button class="btn btn-info " type="button" style="margin-left:1px;" @click="search">Search</button>
    </form>
			</div>

				<div>
					<center>
						<h6> {{getresponse.location.localtime}} </h6>
						<img :src="getresponse.current.condition.icon" width="100px;">
						<h1 style=""> 
						{{getresponse.current.temp_c}}°</h1>
						<h4>{{getresponse.current.condition.text}}</h4>
					</center>
					
				</div>
	
				<div class="tof">
					<center>		
						<h6 style="">{{getresponse.location.name}} , {{getresponse.location.country}}</h6>
					</center>
				</div>

				<div style="margin-top:30px;margin-left:20px;">
					<small>humidity : {{getresponse.current.humidity}} %</small>
					<br>
					<small>max temp: {{getresponse.forecast.forecastday[0].day.maxtemp_c}}°</small>
					<br>
					<small>min temp: {{getresponse.forecast.forecastday[0].day.mintemp_c}}°</small>
				</div>
		</div>
	</div>
	</div>
		
</template>

<style>
		.contain{
		background-color: white;
		border: solid #f2fbfc 1px ;
		margin-top: 6%;
		float: left;
		margin-left: 30%;
		width: 500px;
		height: 450px;
		margin-bottom: 7%;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.inp{
		margin-top: 20px;
		padding: 10px;
	}

	.tof{
		
	}
	
</style>

<script>
import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return{
				city:''
			}
		},
		name:"weather",
		methods:{
		...mapActions(['getweather']),
		search(){
			// var vm=this; 
			this.$Progress.start()
			this.getweather(this.city)
			this.$Progress.finish()
		}
		},
		computed:mapGetters(['getresponse']),
		created(){
		this.$Progress.start()
		this.getweather(this.city)	 
		},
		mounted(){
		this.$Progress.finish()
		}
	}
</script>