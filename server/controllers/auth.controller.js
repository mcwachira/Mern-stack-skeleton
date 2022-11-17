const User = require('../models/user.model')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const {expressjwt} = require('express-jwt')


const signIn =asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email })
    console.log(user)
    // console.log(email)
    
    // let value =  await bcrypt.compare(password, user.password)
    // console.log(value)
    if(!user){
        return res.status(401).json({error : 'User with that email not found'})
    }
    if(!user && (await bcrypt.compare(password , user.password)) ){
        return res.status(401).send({error: 'Email and password do not match '})
    }

  const id =user._id
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
   
    console.log(token)
    //res.cookie('t', token, { expiresIn: new Date() + 999})
    return res.json({
        token, 
        user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }
    })

    res.status(401).json({
        error: 'Could not sign you in'
    })
})


const signOut =asyncHandler(async (req, res) => {

    res.clearCookie("t")
    return res.status(200).json({
        message:'signed out'
    })
})



//method to verify if request has valid token in the header
const requireSignIn = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"] ,
    userProperty:'auth'
})


//protecting our routes for updating and deleting
const hasAuthorization = async (req, res, next) =>  {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        //get token from our header
        token = req.headers.authorization.split("")[1]
        console.log(token)

        //verify the token
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        console.log({decoded:decoded.id})
        //get the user
        req.user = await User.findById(decoded.id).select('-password')
        next()

    } catch(error){
        console.log(error)
        res.status(401)
        throw new Error('Not Authorized')
    }
  }

  if(!token){
    res.status(401);
    throw new Error ('No authorized Token')
  }

}

module.exports = {
    signIn,
    signOut,
    requireSignIn,
    hasAuthorization
}