const { register, login, logout } = require('../controller/authController')

const router = require('express').Router()

router.route('/api/register').post(register)

router.route('/api/login').post(login)

router.route('/api/logout').get(logout)

module.exports = router