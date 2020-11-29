<template>
  <v-container>
     <v-card class="mx-auto my-12" width="500px">
      <v-card-title>
        <h1 class="display-1">asistencia</h1>
      </v-card-title>
      <v-card-text class="d-flex  flex-column">
          
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
 // import axios from 'axios'

  export default {
    mounted () {
      navigator.geolocation
        .getCurrentPosition(
          (pos) => {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
          },
          (error) => { console.error(error) }
        )
    },
  }
</script>

