<template>
  <v-container>
    <v-card v-if="this.show == 'session'" class="mx-auto my-12" width="500px">
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
 // import QRCode from 'qrcode';

  export default {
    async mounted () {
      try {
        const {data} = await axios.get( '/new-session', {
            headers: {
              token: "Bearer " + localStorage.getItem("token"),
            }
          })

       console.log(data.id) //QRCode con canvas
      }
      catch (e) {
        console.error(e)
      }
    },
  }
</script>

