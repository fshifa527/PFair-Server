//to load .env content into process.env

require('dotenv').config()
//importing express and cors
const express=require('express')
const cors=require('cors')
const router = require('./Router/routes')
require('./DB/connection')
//creating server
const pfserver=express()

//configuring cors in server
pfserver.use(cors())

//configuring cors in server
pfserver.use(express.json())

//configuring routes to server
pfserver.use(router)

//serving uploaded files

pfserver.use('/uploads',express.static('./uploads'))

const PORT=3000

//to run server
pfserver.listen(PORT,()=>{
    console.log(`Server Is Running at:${PORT}`)

})
pfserver.get('/',(req,res)=>{
    res.status(200).send("<h1>The Request Is Hit At Server...!! </h1>")
})
