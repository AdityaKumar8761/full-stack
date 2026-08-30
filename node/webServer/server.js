const http = require('http')
const fs = require('fs')
const url = require('url')

const PORT = 8000

const myServer = http.createServer(async (req , res) =>{
    const log = `${Date.now()} : New Req Received \n 
    ${req.headers} \n`



    //url for parameters
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)

    const search = myUrl.query.q;
    res.end('here are your result for search ' + search)



    // fs.appendFile('log.txt' , log , (err,data) =>{
    //     res.end('hello from the user you data has been saved ')
    // })
    // res.end('hello form server')
})

myServer.listen(PORT , console.log(`The server is running on port ${PORT}`))