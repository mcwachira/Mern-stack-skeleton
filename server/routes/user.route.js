const express = require ('express')
const router = express.Router()
const { createUser,
    getUserList,
    getUserById,
    updateUser,
    deleteUser } =  require ('../controllers/user.controller')

const { 
    requireSignIn,
    hasAuthorization } = require('../controllers/auth.controller')

//create user

router.post('/api/users', createUser)

//get all users
router.get('/api/users', requireSignIn, getUserList)

//get user by id
router.get(`/api/users/:userId`, requireSignIn, getUserById)

//update user
router.put('/api/users/:userId', requireSignIn, hasAuthorization, updateUser)

//delete user
router.delete('/api/users/:userId', requireSignIn, hasAuthorization, deleteUser)




module.exports = router