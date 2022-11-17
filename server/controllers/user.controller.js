const User  = require('../models/user.model')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


//create user
 const createUser = asyncHandler(async(req, res) =>{
     //get data from the body
     const { name, email, password } = req.body

     //check if all fields are present
     if (!name || !email || !password) {
         res.status(400)
         throw new Error('please add all the fields')
     }
     //check if the user exist
     const userExist = await User.findOne({ email })

     if (userExist) {
         res.status(400)
         throw new Error('user with that email exist')
     }

     //generate hash password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)
     const user = await User.create({
         name: name,
         email: email,
         password: hashedPassword,
     })


     if (user) {
         res.status(201).json({
             id: user._id,
             name: user.name,
             email: user.email,
             password: user.password,
         })
     } else {
         res.status(400)
         throw new Error('error creating user')
     }

})

const userById = asyncHandler(async (req, res, next, id) => {
    let user = await User.findById(id)
    if (!user)
        return res.status('400').json({
            error: "User not found"
        })
    req.profile = user
    res.status('400').json({
        error: "Could not retrieve user"
    })


})

//get list of users 
const getUserList = asyncHandler(async (req, res) => {

    const users = await User.find().select('name email')
    
    if(!users){
       throw new Error(' No users found')
    }

    res.status(200).send(users)
})



//get user by id

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.userId
    console.log(id)
    const user = await User.findById(id).select('name email')

    if (!user) {
        throw new Error(' No user with that id exits')
    }

    res.status(200).send(user)

})



//updateUser

const updateUser = asyncHandler(async (req, res) => {
    const id = req.params.userId
    const user = await User.findById(id)

    if (!user) {
        throw new Error(' No user with that id exits')
    }

    const updatedUser = await User.findByIdAndUpdate(
        id, req.body, {
        new: true
    })

    res.status(200).send(updateUser)
})


//delete user
const deleteUser =  asyncHandler(async (req, res) => {
    const id = req.params.userId
    const user = await User.findByIdAndDelete(id)

    if (!user) {
        throw new Error(' No user with that id exits')
    }
    res.status(200).json({message: 'user deleted successfully'})
})


module.exports ={
    createUser,
    getUserList,
    getUserById,
    updateUser,
    deleteUser
}