<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer/>

      <div v-if="isLoggedIn">
        <span class="pr-5">{{ this.$store.state.usrName }}</span>
        <v-btn
          color="secondary"
          @click="logout">
          logout
        </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
  import store from '../store'

  export default {
    name: 'NavBar',

    computed: {
      isLoggedIn() {
        return !!store.state.token
      }
    },

    methods: {
      logout() {
        store.dispatch('removeToken')
        this.$router.push('/login');
      }
    }
  }
</script>
