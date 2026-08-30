const http = require('http')
const url = require('url')

const PORT = 8000

const myServer = http.createServer(async (req , res) =>{
    if(req.url === '/' && req.method === 'GET'){
        res.end('home page')
    }
    else if(req.url === "/signup" && req.method ==='POST'){
        //DB query
        res.end("Success")
    }
    else{
        res.end('get out')
    }
})

myServer.listen(PORT , console.log(`The server is running on port ${PORT}`))