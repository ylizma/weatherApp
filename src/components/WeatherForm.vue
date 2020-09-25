<template>
  <div class="pt-3 pl-3">
    <form @submit.prevent="getCity">
      <input
        class="h-10 m-1 p-1 text-black "
        type="text"
        placeholder="Casablanca"
        style="width: 400px"
        v-model="city"
      />
      <button
        class="px-4 py-2 mx-1 text-sm font-normal leading-5 text-black transition-colors duration-150 bg-orange-400 border border-transparent rounded-md active:bg-purple-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline-purple"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
    };
  },
  methods: {
    getCity(){
      this.$emit('getCity',this.city)
      this.city = ''
    }
  },
};
</script>

<style></style>
