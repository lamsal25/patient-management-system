const { register, login } = require('../controller/authController')

const router = require('express').Router()

router.route('/api/register').post(register)

router.route('/api/login').post(login)

module.exports = router