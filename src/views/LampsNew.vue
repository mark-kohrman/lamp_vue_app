<template>
  <div class="lamps-new">
    <h1> Customize Your Lamp </h1>
    <form v-on:submit.prevent="createLamp()">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group">
      <label>Color:</label>
      <input type="text" v-model="newLampColor" />
    </div>
    <div class="form-group">
      <label>Size:</label>
      <input type="text" v-model="newLampSize" />
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input type="text" v-model="newLampPrice" />
    </div>
    <input type="submit" class="btn btn-primary" value="Submit">
  </form>
 
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newLampColor: "",
      newLampSize: "",
      newLampPrice: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createLamp: function () {
      var params = {
        color: this.newLampColor,
        size: this.newLampSize,
        price: this.newLampPrice,
      };
      axios.post("/api/lamps", params).then((response) => {
        console.log("lamps create", response);
        this.$router.push("/lamps");
      });
    },
  },
};
</script>