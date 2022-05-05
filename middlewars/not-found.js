const notFound = (req, res, next) => {

    res.status(404).send(' There was a problem, Route Not Found')
}

module.exports = notFound