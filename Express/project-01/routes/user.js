const express = require('express')
const router = express.Router()
const User = require('../modules/User.js')



//route


router.get('/' , async (req, res)=>{
    //fetching users form the database
    const allDBUsers = await User.find({})
    const html =`
    <ul>
       ${allDBUsers.map(user => `<li>${user.firstName}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})

router.get('/:id' ,async (req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message: 'user not found'})
    }
    return res.json(user)
})



//add data to database 

router.post('/' ,async (req,res)=>{
    const body = req.body
    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ){
     return res.status(400).json({ msg: 'All fields are req...'})   
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        jobTitle : body.jobTitle
    })

    console.log(result)

    return res.status(201).json({msg : 'success'})
})


module.exports = router