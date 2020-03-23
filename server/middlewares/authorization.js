const {
    Report
} = require('../models')

module.exports = (request, response, next) => {
    Report.findByPk(request.params.id)
        .then(result => {
            if (result) {
                if (result.user_id == request.userData.id) {
                    next()
                } else {
                    throw {
                        code: 403,
                        message: 'unauthorized'
                    }
                }
            } else {
                throw {
                    code: 404,
                    message: 'not found'
                }
            }
        })
        .catch(err => {
            next(err)
        })
}