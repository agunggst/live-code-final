const {
    Country
} = require('../models')

class CountryController {
    static listAll(request, response, next) {
        Country.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(result => {
                response.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = CountryController