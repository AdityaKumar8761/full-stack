const User = require('../modules/User.js')

async function handleUserSignup(req, res){
    const { firstName , email , password} = req.body;
    await User.create({
        firstName,
        email,
        password
    })
    return res.json({message: 'user added'})
}

module.exports = handleUserSignup