const router = require('express').Router()
const Session = require('../models/Session')

router.post('/new', async ({body}, res, next) => {
    console.log(body)
    try{
        const newSession = new Session(body)
        await newSession.save()
        res.send(newSession.id)
    } catch(err){
        console.error('Failed to return content', err);
    }
})

module.exports = router
