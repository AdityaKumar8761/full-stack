const express = require('express')
const User =require('./modules/User.js')
const userRouter = require('./routes/user.js')
const connectMongoDb = require('./connection.js')

const PORT = 8000


const app = express()


connectMongoDb('mongodb://127.0.0.1:27017/fullStack')

//MIDDLE Ware
app.use(express.urlencoded({extended:false}))

app.use((req,res, next) =>{
    console.log("hello from middleware1")
    next()
})


app.get('/' , (req , res) =>{
    return res.end("welcome to the server")
})


//if any request comes to /user use the userRouter function or route

app.use('/users' , userRouter);

app.listen(PORT , ()=> console.log(`The server is running on port ${PORT}`))