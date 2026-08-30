const { REFUSED } = require("dns")
const fs = require("fs")
const os = require("os")

// fs.writeFile('./test.txt' , "hello there acrynonous" ,(err) => {
//     if(err){
//         console.log(err)
//         return
//     }
// })
// console.log('done')

// const result= fs.readFileSync('./test.txt' , 'utf-8' , (err)=>{
//     if(err){
//         console.log(err)
//         return
// }
// })

// console.log(result)


//non-blocking
fs.readFile('./test.txt' , 'utf-8' , (err , result) =>{
    if(err){
        console.log(err)
    }else(
        console.log(result)
    )
})

//                          Different
//sync return the value 
//Async do not return value it expect for call back function 

fs.appendFileSync('./test.txt' , 'hey there\n')


console.log(os.cpus().length)