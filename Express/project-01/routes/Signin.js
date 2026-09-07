const express = require('express')
const signIn = requuire('../controller/signIn.js')

const router = express.Router()

router.get('/' , signIn)

module.exports = signIn
