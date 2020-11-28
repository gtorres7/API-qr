<template>
  <v-container>
    <v-card class="mx-auto my-12" width="500px">
      <v-card-title>
        <h1 class="display-1">Bienvenido {{this.$store.state.usrName}}</h1>
      </v-card-title>
      <v-card-text class="d-flex  flex-column">
        <v-btn
              x-large
              color="success"
              dark
              class="ma-5"
              @click="newSession"
            >
              Generar Sesion        
        </v-btn>

        <v-btn
            x-large
            color="success"
            class="ma-5"
            dark
              @click="scan"

        >
        
            Scan
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
 // import axios from 'axios'

  export default {
    methods: {
      newSession(){
        this.$router.push('/new-session');
      },
      scan(){
        this.$router.push('/scan');
      }
    },
  }
</script>

