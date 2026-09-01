const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const PORT = 8000


const app = express()


//MIDDLE Ware
app.use(express.urlencoded({extended:false}))

app.use((req,res, next) =>{
    console.log("hello from middleware1")
    next()
})




//route
app.route('/api/users/:id').get((req,res)=>{
    return res.json({message: 'get requestion'})
})
.post((req,res)=>{

})
.delete((req,res)=>{})




app.get('/' , (req , res) =>{
    return res.end("welcome to the server")
})

app.get('/api/users' , (req , res)=>{
    //header setting
    res.setHeader('X-myName' , 'Aditya kuamr') // custom header 
//always add X custom headr 

    return res.json(users)
})
app.get('/users' , (req, res)=>{
    const html =`
    <ul>
       ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})

app.get('/users/:id' , (req,res)=>{
    const user = users.find(user => user.id === Number(req.params.id))
    if(!user){
        return res.status(404).json({message: 'user not found'})
    }
    return res.json(user)
})

app.post('/api/users' , (req,res)=>{
    const body = req.body
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err,data)=>{
        return res.json({message: "data added"})
    })
})


app.listen(PORT , ()=> console.log(`The server is running on port ${PORT}`))