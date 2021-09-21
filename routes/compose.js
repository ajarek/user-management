const router = require('express').Router()
const Register = require('../models/register')

router.get('/compose',(req,res)=>{
    res.render('addRecord')
})
.post('/compose',(req,res)=>{
    const{nr,first,last,email,phone}=req.body
    if(!nr || !first || !last || !email || !phone)
     return res.send('Plase enter all the required credetnials!')
     const newRegister =new Register({nr,first,last,email,phone})
     newRegister.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})
module.exports=router