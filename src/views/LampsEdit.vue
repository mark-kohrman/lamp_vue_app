<template>
  <div class="lamps-edit">
    <h1>Edit Lamp!</h1>
    <form v-on:submit.prevent="updateLamp(lamp)">
      <ul>
        <li v-for="error in errors"> {{ error }}</li>
      </ul>
      <div class="form-group">
      <label>Color: </label>
      <input type="text" v-model="lamp.color" />
      </div>
      <div class="form-group">
      <label>Size: </label>
        <input type="text" v-model="lamp.size" />
      </div>
      <div class="form-group">
      <label> Price: </label>
       <input type="text" v-model="lamp.price" />
      </div>
      <input type="submit" value="Update" />
    </form>

      
     
    <router-link to="/lamps">Back to lamps</router-link>


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
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/lamps/" + this.$route.params.id).then((response) => {
      console.log("show lamps", response);
      this.lamp = response.data;
    });
  },
  methods: {
    updateLamp: function (lamp) {
      var params = {
        color: lamp.color,
        size: lamp.size,
        price: lamp.price,
      };
      axios
        .patch("/api/lamps/" + lamp.id, params)
        .then((response) => {
          console.log("lamp update", response);
          this.$router.push("/lamps");
        })
        .catch((error) => {
          console.log("lamp update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>