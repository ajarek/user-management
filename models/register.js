const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    nr:{
        type:Number,
        required:true
    },
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
module.exports = new mongoose.model('Register',RegisterSchema)