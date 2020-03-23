const router = require('express').Router()
const UserController = require('../controllers/UserController')
const CountryController = require('../controllers/CountryController')
const authentication = require('../middlewares/authentication')

router.post('/login', UserController.login)

router.get('/countries', authentication, CountryController.listAll)

router.use('/reports', require('./reportRouter'))

module.exports = router