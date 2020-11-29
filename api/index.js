require('dotenv').config()

require('./db/db')

const history = require('connect-history-api-fallback');
const express = require('express')
const apiRouter = require('./routers/apiRouter')

const app = express()

app.use(express.json())
app.use('/api', apiRouter)

app.use(history())
app.use(express.static('dist'))

const port = process.env.PORT
app.listen(port, () => {
   console.log(`servidor corriendo en puerto: ${port}`)
})