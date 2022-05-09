const Service = require('../models/Service')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')



const getAllServices = async (req,res)=>{
    req.body.serviceProvider = req.user.userId; 
    const services = await Service.find({service : req.body.servise}).populate("serviceProvider")
    // console.log(req.body);

    res.status(StatusCodes.OK).json({services})
}
const getService = async (req,res)=>{
    const {user : {userId}, params : {id: serviceId}} = req

    const service = await Service.findOne({_id: serviceId, serviceProvider:userId })
    if(!service){
        throw new NotFoundError(`No service found for ${serviceId}`)
    }
    res.status(StatusCodes.OK).json({service})
}

const createService = async (req,res)=>{
    req.body.serviceProvider = req.user.userId; 
    
    const servise = await Service.create(req.body)

    res.status(StatusCodes.CREATED).json({servise})
    // res.json(req.body);
}

const deleteService = async (req,res)=>{
    const {
        user : {userId},
        params : {id :serviceId}
    } = req
  
    const work = await Service.findByIdAndRemove({
        _id:serviceId,
        serviceProvider :userId
    })
    if(!work){
        throw new NotFoundError(`No service exist with id ${serviceId}`)
    }
    res.status(StatusCodes.OK).json({work})
}

const updateService = async (req,res)=>{
    const {
        body: {service , information, skill},
        user : {userId},
        params: {id : serviceId}
    } = req 
    if ( service === ''  || information === '' ||skill === ''){
        throw new BadRequestError(' please write your servise , skills and information here   ')
    }
const work = await Service.findByIdAndUpdate(
    {_id: serviceId, serviceProvider:userId}, 
    req.body,
    {new : true , runValidators:true}
)
if(!work){
    throw new NotFoundError(`No service exist with id ${serviceId}`)
}

    res.status(StatusCodes.OK).json({work})
}



module.exports = {
    getAllServices,
    getService,
    createService,
    deleteService,
    updateService,
    // findService
}