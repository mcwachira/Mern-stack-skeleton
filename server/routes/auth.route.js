const express = require('express')
const router = express.Router()
const { signIn,
    signOut,
    requireSignIn,
    hasAuthorization } = require('../controllers/auth.controller')

    //routes

    router.post('/auth/signin', signIn)
router.post('/auth/signout', signOut)

module.exports = router