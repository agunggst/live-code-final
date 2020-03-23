const {
    User
} = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (request, response, next) => {
    try {
        let payload = jwt.verify(request.headers.token, process.env.JWT_SECRET)
        User.findByPk(payload.id)
            .then(result => {
                if (result) {
                    request.userData = payload
                    next()
                } else {
                    throw {
                        code: 403,
                        message: 'unauthenticated'
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    } catch (err) {
        next(err)
    }
}