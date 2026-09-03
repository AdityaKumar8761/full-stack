const mongoose = require('mongoose');


async function connectMongoDb(url){

    //connecting mongoose
    return mongoose.connect(url)
    .then(() => console.log("MondoDB connected"))
    .catch(err => console.log('Mongo Error ' , err))
    
}



module.exports = connectMongoDb