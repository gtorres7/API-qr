const router = require('express').Router()

const sessionRouter = require('../routers/session')
const userRouter = require('./routers/user')

router.use('/session', sessionRouter)
router.use('/users', userRouter)

module.exports= router