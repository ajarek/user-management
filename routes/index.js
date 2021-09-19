const router = require('express').Router()
const Register = require('../models/register')

router.get('/',async(req,res)=>{
    const allRecord=await Register.find({})
    res.render('displayRecord',{records:allRecord})
    
})



module.exports=router