import http  from 'node:http'
import { getDataFromDB } from './db.js'
import {status} from './utilite/status.js'
import { count } from 'node:console'

const PORT = 8000
//end method take 3 parameter data , utf type, and a function



const server = http.createServer(async (req,res) =>{
    const data = await getDataFromDB()
    
    if(req.url === '/api/data' && req.method === 'GET') {
        status(res , 200 , data)
    }

    else if(req.url.startsWith('/api/continent') && req.method === 'GET'){
        const continetn =req.url.split('/').pop()

        const result = data.filter(data => data.continent.toLocaleLowerCase() === continetn.toLocaleLowerCase())
        
        if(result.length > 0){
            status(res , 200 , result)
        }else{
            status(res , 404 , {error : 'not found' , message: 'The country does not exist'})
        }
        
    }

    else if(req.url.startsWith('/api/country') && req.method ==='GET'){
        const country = req.url.split('/').pop()
        const result = data.filter(data => data.country.toLocaleLowerCase() === country.toLocaleLowerCase())

        if(result.length > 0){
            status(res , 200 , result)
        }else{
            status(res , 404 , {error : 'not found' , message: 'The country does not exist'})
        }
    }

    else{
        status(res , 404 , {error : 'not found' , message: 'The country does not exist'})
    }
})


server.listen(PORT , ()=> console.log(`The server is running on port ${PORT}`))