<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view class="container"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/navBar'

export default {
  name: 'App',

  mounted(){
    const token = localStorage.getItem('token')

    if (token)
      this.$store.commit('setToken', token)
  },

  components: {
    NavBar
  }
};
</script>
