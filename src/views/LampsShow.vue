<template>
  <div class="lamps-show">
    <h1>Color: {{ lamp.color }}</h1>
    <p>Size: {{ lamp.size }}</p>
    <p>Price: ${{ lamp.price }}</p>


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      lamp: {},
    };
  },
  created: function () {
    axios.get("/api/lamps/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.lamp = response.data;
    });
  },
  methods: {},
};
</script>