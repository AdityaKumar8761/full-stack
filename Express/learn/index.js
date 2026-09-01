const express = require('express')
const http = require('http')

const PORT = 8000
const app = express()

app.get('/' , (req, res) =>{
    return res.send("welcom to home page")
})

app.get('/about' , (req, res) =>{
    return res.send("welcom to about ")
})

app.get('/q' , (req, res) =>{
    return res.send(req.query.name)
})



const server = http.createServer(app)
server.listen(PORT , () => console.log(`server is running on port ${PORT}`))
