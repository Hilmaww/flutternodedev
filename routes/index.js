const express = require('express');
const router = express.Router()
const actions = require('../methods/actions')

router.get('/',(req, res, next)=>{
    res.end('Hello WOrld')
})

router.get('/dashboard',(req, res, next)=>{
    res.send('Dashboard')
})

// @desc adding new user
// @route POST /adduser
router.post('/adduser', actions.addNew)

// @desc authenticate a user
// @route POST /authenticate
router.post('/authenticate', actions.authenticate)

// @desc get info of a user
// @route GET /getinfo
router.get('/getinfo', actions.getinfo)



module.exports = router;