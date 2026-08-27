export function status(res ,status , data){
    res.writeHead (status , {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin' : "*",
        'Access-Control-Allow-Method' : 'Get'
    })
    res.end(JSON.stringify(data))
}