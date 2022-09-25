const Logger = require('../util/logger')

module.exports = () => {
    return (err, req, res, next) => {
        Logger.error(err.stack)
        res.status(500).json({
            error: err
        })
    }
}