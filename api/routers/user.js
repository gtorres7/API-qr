const express = require('express')
const User = require('../models/User')
const auth = require ('../middleware/auth')

const router = express.Router()

/* for debugging purposes
returns all users
router.get('/all', async (req, res) => {
   try {
      const users = await User.find()
      res.status(200).send({users})
   } catch (error) {
      res.status(400).send(error)
   }
})
*/


router.post('/register', async (req, res) => {
   // registrar usuario
   try {
      const user = new User(req.body)
      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({ user, token })
   } catch (error) {
      res.status(400).send(error)
   }
})

router.post('/login', async(req, res) => {
   //login
   try {
      const { email, password } = req.body
      const user = await User.findByCredentials(email, password)
      if (!user) {
         return res.status(401).send({error: 'Login failed! Check authentication credentials'})
      }
      const token = await user.generateAuthToken()
      res.send({ token, userName: user.name })
   } catch (error) {
      res.status(400).send(error)
   }

})

// ver perfil de usuario logeado
router.get('/me', auth, async(req, res) => {
   const {name} = req.user
   res.send({userName: name})
})

/*
router.post('/me/logout', auth, async (req, res) => {
   // Log user out of the application
   try {
      req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token
   })
   await req.user.save()
   res.send()
   } catch (error) {
      res.status(500).send(error)
   }
})
*/

/*
router.post('/me/logoutall', auth, async(req, res) => {
   // Log user out of all devices
   try {
      req.user.tokens.splice(0, req.user.tokens.length)
      await req.user.save()
      res.send()
   } catch (error) {
      res.status(500).send(error)
   }
})
*/

module.exports = router