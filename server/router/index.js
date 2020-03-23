const router = require('express').Router()
const UserController = require('../controllers')
const CountryController = require('../controllers')

router.post('/login')

router.get('/countries')

router.use('/reports', require('./reportRouter'))

module.exports = router