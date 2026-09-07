const express = require('express')
const handleUserSignup = require('../controller/aurhonticationUser.js')

const router = express.Router();

router.post('/',handleUserSignup);

module.exports = router