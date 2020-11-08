require('dotenv').config()

require('./db/db')

const express = require('express')
const userRouter = require('./routers/user')

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.get('/test', (req, res) => {
   res.send('lalaland')
})

const port = process.env.PORT
app.listen(port, () => {
   console.log(`servidor corriendo en puerto: ${port}`)
})