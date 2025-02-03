const User = require('../model/user');


exports.getAllUsers = async (req, res) =>{
    try{
        const users= await User.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleUser = async (req, res) =>{
    try {
        const user = await User.findOne({user_id: req.params.id})
        if(!user)
            return res.status(404).json({msg: 'User Not found'})
        
        res.json(user)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.addNewUser = async(req,res)=>{
    try{
        const user = await User.findOne({user_id:req.body.user_id})
        if(!user){
            const addedUser = await User.create(req.body)
            res.json(addedUser)
        }
        else
        {
            res.json({msg:'User already exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.updateUser = async (req, res) =>{
    try{
        const user = req.body
        const fetchedUser = await User.findOne({user_id: user.user_id})
        if(fetchedUser){
            await User.updateOne(user)
            res.json(await User.findOne({user_id: user.user_id}))
        }
        else{
            res.json({msg: 'User doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
exports.deleteUser = async (req, res)=>{
    try{
        const user = await User.findOne({user_id: req.params.id})
        if(user){
            await User.deleteOne({user_id:user.user_id})
            res.json(user)
        }
        else{
            res.json({msg: 'user doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}