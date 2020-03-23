const {
    User
} = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserController {
    static login(request, response, next) {
        User.findOne({
                where: {
                    username: request.body.username
                }
            })
            .then(result => {
                if (result) {
                    if (result.password == request.body.password) {
                        let token = jwt.sign({
                            id: result.id,
                            username: result.username
                        }, process.env.JWT_SECRET)

                        response.status(200).json({
                            token,
                            id: result.id,
                            username: result.username
                        })
                    } else {
                        throw {
                            code: 400,
                            message: 'Wrong Password'
                        }
                    }
                } else {
                    throw {
                        code: 404,
                        message: 'Unregistered User'
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController