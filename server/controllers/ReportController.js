const {
    Report,
    Country
} = require('../models')

class ReportController {
    static listAllReport(request, response, next) {
        Report.findAll({
                where: {
                    user_id: request.userData.id
                }
            })
            .then(result => {
                let data_response = []
                result.forEach(element => {
                    data_response.push({
                        cases: element.report,
                        countryId: element.countryId
                    })
                })

                response.status(200).json(data_response)
            })
            .catch(err => {
                next(err)
            })
    }

    static createReport(request, response, next) {
        let data_report
        let data_country
        Report.create({
                report: request.body.cases,
                countryId: request.body.countryId,
                user_id: request.userData.id
            })
            .then(result => {
                data_report = result
                return Country.findByPk(request.body.countryId)
            })
            .then(result => {
                if (result) {
                    data_country = result
                    return Country.update({
                        cases: result.cases + request.body.cases
                    }, {
                        where: {
                            id: data_country.id
                        }
                    })
                } else {
                    throw {
                        code: 404,
                        message: 'country not found'
                    }
                }
            })
            .then(result => {
                data_country.cases += request.body.cases
                let data_response = {
                    report: {
                        id: data_report.id,
                        report: data_report.report,
                        UserId: data_report.user_id,
                        CountryId: data_report.countryId,
                        createdAt: data_report.createdAt,
                        updatedAt: data_report.updatedAt,
                        Country: data_country
                    }
                }
                response.status(201).json(data_response)
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteReport(request, response, next) {
        let data_report
        let data_country
        Report.findByPk(request.params.id)
            .then(result => {
                if (result) {
                    data_report = result
                    return Country.findByPk(data_report.countryId)
                } else {
                    throw {
                        code: 404,
                        message: 'report not found'
                    }
                }
            })
            .then(result => {
                if (result) {
                    data_country = result
                    return Country.update({
                        cases: data_country.cases - data_report.report
                    }, {
                        where: {
                            id: data_country.id
                        }
                    })
                } else {
                    throw {
                        code: 404,
                        message: 'country not found'
                    }
                }
            })
            .then(result => {
                data_country.cases -= data_report.report
                let data_response = {
                    country: data_country,
                    report: 'Successfully delete'
                }
                response.status(200).json(data_response)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ReportController