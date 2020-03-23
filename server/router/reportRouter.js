const reportRouter = require('express').Router()
const ReportController = require('../controllers/ReportController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

reportRouter.get('/', authentication, ReportController.listAllReport)
reportRouter.post('/', authentication, ReportController.createReport)
reportRouter.delete('/:id', authentication, authorization, ReportController.deleteReport)

module.exports = reportRouter