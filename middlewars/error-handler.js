const { StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = (error, req, res, next) => {
   let customError ={
       StatusCode : error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
       msg : error.message || 'there are somethinmg wrong , please try again later'
   }
   if(error.name === 'validationError'){
       customError.msg = Object.values(error.errors).map((item) => item.message).join(',')
      customError.StatusCode = 400
   }
   if (error.code && error.code === 11000){
       customError.msg = ` Please schoose another value, you have just entred a duplicate value in ${Object.keys(error.keyValue)} field`
       customError.StatusCode = 400
   }
   if (error.name === 'castError'){
       customError.msg = ` Nothing found in : ${error.value} field`
       customError.StatusCode =  404
   }
   return res.statusCode(customError.StatusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware