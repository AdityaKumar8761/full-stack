const aa = new Promise ((resolve , reject)=>{
    const success = Math.random()>0.5
    success ? resolve('Operation successful') : reject('Operation failed')
})

aa.then(response => console.log(response))
.catch(err => console.log(err))


const promise = new Promise((resolve , reject) => {
    const success = Math.random() >0.5
    if(success) {
        resolve ("operation successful")
    }else{
        reject('Operation failed')
    }
})

promise.then(response => console.log(response)).catch(reject => console.log(reject))


