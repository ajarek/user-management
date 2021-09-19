const router = require('express').Router()
const Register = require('../models/register')

router.get('/action/:id', async(req,res)=>{
const {id}=req.params
const getRegister=await Register.findOne({_id: id})

res.render('particularRegister',{record:getRegister})

})
.get('/delete/:id',(req,res)=>{
    const{id}=req.params
    Register.deleteOne({_id:id})
    .then(()=>{
        console.log('Deleted record successfully!')
        res.redirect("/")
    })
     .catch((err)=>console.log(err))
    
})
.get('/edit/:id',async(req,res)=>{
    const{id}=req.params
    const getData =await Register.findOne({_id:id}) 
    res.render('editRegister',{record:getData})
})
.post('/edit/:id',(req,res)=>{
    const{id}=req.params
    const {nr,first,last,email,phone}=req.body
    Register.updateOne({_id:id},{nr,first,last,email,phone})
    .then(()=>{
        console.log('successfuly! updated the record!')
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})

module.exports=router
