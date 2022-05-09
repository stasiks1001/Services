const User = require('../models/User')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{
   console.log("hello worlds");

   try {
    const {name, email, password} = req.body
    console.log(name, email, password)
    if(!name || !email || !password){
        
        throw new BadRequestError('Please give name, email, and password')
    }
   let existUser = await User.findOne({email});
   if(existUser){
    res.status(500).json({error: "user existed already!!"})
   }
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedUser = {name, email, password: hashedPassword}

    const user = await User.create({name, email, password})
    // console.log(user)
    res.status(201).json(user)
   } catch (error) {
       console.log(error)
       res.status(500).json({error: "Server Error"})

}
}
const login = async ( req, res)=> {
  const {email, password}= req.body;
  if( !email || !password){
        
    throw new BadRequestError('Please give , email, and password')
    
}
const user = await User.findOne({email})
console.log(user)
if(!user){
    throw new UnauthenticatedError('  Unauthenticated User,  Please give , email, and password')
}
const isPasswordCorrect = await bcrypt.compare(password, user.password)


if(!isPasswordCorrect){
    throw new UnauthenticatedError('  Unauthenticated User,  Please give , email, and password')
}
 
 const token = jwt.sign( { user_id: user._id, email },process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRED,
    }); 

res.status(StatusCodes.OK).json({user: user, token: token})


}

module.exports = {
    register,
    login,
}