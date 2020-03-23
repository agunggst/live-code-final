const reportRouter = require('express').Router()
const ReportController = require('../controllers')

reportRouter.get('/', ReportController)
reportRouter.post('/', ReportController)
reportRouter.delete('/:id', ReportController)

module.exports = reportRouter