export function status(res ,status , data){
    res.writeHead (status , {
        'content-type' : 'application/json'
    })
    res.end(JSON.stringify(data))
}