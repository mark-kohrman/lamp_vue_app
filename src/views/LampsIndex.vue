<template>
  <div class="lamps-index">
    <h1>These are all the lamps</h1>
    <div v-for="lamp in lamps">
      <h2>{{  lamp.color  }}</h2>
      <p> {{ lamp.size  }}</p>
      <p>$ {{ lamp.price }}</p>
      <router-link v-bind:to="`/lamps/${lamp.id}`">More details</router-link>
    </div>
  </div> 
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      lamps: [],
    };
  },
  created: function () {
    axios.get("/api/lamps").then((response) => {
      console.log("this the lamp index page", response);
      this.lamps = response.data;
    });
  },
  methods: {},
};
</script>