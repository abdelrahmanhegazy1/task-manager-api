const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req,res,next)=> {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decoded = jwt.verify(token,'thisismynewcourse')
        console.log(decoded)
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})

        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    }
    catch(e){
        console.log(e)
        res.status(401).send({
            error: 'Please authenticate.'
        })    
    }
}

module.exports = auth 