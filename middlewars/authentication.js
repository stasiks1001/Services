const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')


const auth = async (req, res, next) => {
    const authHeader = req.headers.authHeader
    if (!authHeader || !authHeader.startWith('Bearer ')) {
        throw new UnauthenticatedError('Unauthenticated User')
    }
    const token = authHeader.split('Bearer ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const user = User.findById(payload.id).select('-password')
        req.user = user

        req.user  = { userId: payload.userId, name: payload.name, email: payload.email}
        next()
        
    } catch (error) {
        console.log(error);
        throw new UnauthenticatedError('unauthenticated user')
    }
}

module.exports = auth