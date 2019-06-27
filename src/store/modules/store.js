import axios from 'axios';

const state={
		response:''
};

const getters={
	getresponse:state=>state.response
};

const actions={
	async getweather({commit},city){
if(city==='') {const resp=await axios.get("http://api.apixu.com/v1/forecast.json?key=637780feb05a4719aaf100319192406&q=agadir");commit('getweath',resp.data)}
else{
	const resp=await axios.get("http://api.apixu.com/v1/forecast.json?key=637780feb05a4719aaf100319192406&q="+city);
	console.log(resp)
	// commit('getweath',resp.data)
}	
	}
};

const mutations={
getweath:(state,info)=>(state.response=info)
};

export default {
	state,
	getters,
	actions,
	mutations
}