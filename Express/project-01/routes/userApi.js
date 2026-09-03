const express = require('express')
const router = express.Router()






app.route('/api/users/:id').get((req,res)=>{
//use 
//cons user = await User.findById(req.params.id)

    return res.json({message: 'get requestion'})
})
.post((req,res)=>{

})
.delete((req,res)=>{})



app.get('/api/users' , (req , res)=>{
    //header setting
    res.setHeader('X-myName' , 'Aditya kuamr') // custom header 
    res.status(201).json({status : "sucdess" })

//always add X custom headr 

    return res.json(users)
})