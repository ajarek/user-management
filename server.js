const express =require('express')
const M = require('minimatch')
const mongoose=require('mongoose')

const {port,database}=require('./config')

const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
//routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))
app.listen(port, () => {
    console.log('Server started listening:'+ port);
})