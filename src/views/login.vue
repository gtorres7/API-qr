<template>
  <v-container>
    <v-card class="mx-auto my-12" width="500px">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-on:submit.prevent="login">
          <v-text-field
            label="Correo"
            v-model="email"
            :rules="[inputRules.required]"
          />

          <v-text-field
            label="Contraseña"
            v-model="password"
            :rules="[inputRules.required]"
            type="password"
          />

          <v-card-actions>
            <v-btn type="submit" color="info">login</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-form>
      </v-card-text>
      
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      email: '',
      password: '', 
      inputRules: {
        required: value => value===0 || !!value || 'campo obligatorio',
      }
    }),

    methods: {
      async login() {
        if(!this.$refs.form.validate()) return
        
        const {email, password} = this
        try {
            const {data} = await axios.post(
                '/api/users/login',
                {email, password}
            )

            this.$store.dispatch('reciveToken', data.token)
            this.$router.push('/welcome');
        }
        catch (e) {
          console.error(e)
        }
      }
    },
  }
</script>

