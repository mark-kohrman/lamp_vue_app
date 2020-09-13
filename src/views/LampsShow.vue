<template>
  <div class="lamps-show">
    <h1> {{message}} </h1>
    <h1>Color: {{ lamp.color }}</h1>
    <p>Size: {{ lamp.size }}</p>
    <p>Price: ${{ lamp.price }}</p>
    <img v-bind:src="lamp.image_url">
    <div>
      <router-link to="/lamps">Back to lamps</router-link>
    </div>

    <div>
      <router-link v-bind:href="`/lamps/${lamp.id}/edit`">Edit Lamp </router-link>
    </div>
    <div>
      <p><button v-on:click="deleteLamp()">Delete the lamp</button></p>
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
      message: "Show stopper page!!!!!!",
      lamp: {},
    };
  },
  created: function () {
    this.showLamp();
  },
  methods: {
    showLamp: function () {
      console.log("show me the lampy");
      console.log(this.$route);
      axios.get("/api/lamps/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.lamp = response.data;
      });
    },
    deleteLamp: function () {
      console.log("delete the lamp");
      axios.delete(`/api/lamps/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push(`/lamps`);
      });
    },
  },
};
</script>