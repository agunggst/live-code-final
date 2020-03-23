module.exports = (err, request, response, next) => {
    if (err.code) {
        response.status(err.code).json({
            errors: [err.message],
            message: 'User Error'
        })
    } else if (err.name == 'SequelizeValidationError') {
        let err_msg = []
        err.errors.forEach(element => {
            err_msg.push(element.message)
        });
        response.status(400).json({
            errors: err_msg,
            message: 'Validation Error'
        })
    } else {
        response.status(500).json({
            errors: ['System Error'],
            message: 'System Error'
        })
    }
}