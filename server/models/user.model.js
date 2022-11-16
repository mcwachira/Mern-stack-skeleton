const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:'Name is Required',
    },

    email:{

        type: String,
        trim: true,
        unique:'Email already Exist',
        match: [/.+\@.+\..+/, 'Please type a valid email address'],
        required: 'Name is Required',

    },
    hashed_password:{
        type:String,
        required:'Password is required'
    },
    salt:String,


}, { timestamps: true })

//The password string that's provided by the user is not stored directly in the user document.Instead, it is handled as a virtual field.

//virtual fields
UserSchema.virtual('password')
.set(function (password) { 
    this._password = password
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password)
 })
 .get(function(){
    return this._password
 })


 //UserSchema Methods
 UserSchema.methods = {
    //compare passwords during login
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
        
    },
    //encrypting user passwords by generating a hash
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
        }catch(error) {
            return ''
        }
    },
     //This method generates a unique and random salt value using the current timestamp at execution and Math.random().
    makeSalt:function(){
        return Math.round((new Date().valueOf * Math.random())) + ''
    }
 }


 //custom validation to check the password value before Mongoose attempts to store the hashed_password value
 UserSchema.path('hashed_password').validate(function(v) {
    if(this._password && this._password.length < 6){
        this.invalidate('password', 'Password must be at least 6 characters long')
    }
    if(this.isNew && !this._password){
        this.invalidate('password' ,'Password is required')
    }
 }, null)


module.exports = mongoose.model('User', UserSchema)