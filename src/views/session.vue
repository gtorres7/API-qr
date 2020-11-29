<template>
  <v-container>
    <v-card class="mx-auto my-12" width="500px">
      <v-card-title>
        <h1 class="display-1">session</h1>
      </v-card-title>
      <v-card-text class="d-flex flex-column">
        <canvas/>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import {getCoordinates} from '../utils/geo'
 // import QRCode from 'qrcode';

  export default {
    async mounted () {
      let {coords} = await getCoordinates()
      coords = {
        long: coords.longitude,
        lat: coords.latitude
      }

      try {
        const {data} = await axios.post('/api/session/new', {coords})

       console.log({data})
      }
      catch (e) {
        console.error(e)
      }
    },
  }
</script>

