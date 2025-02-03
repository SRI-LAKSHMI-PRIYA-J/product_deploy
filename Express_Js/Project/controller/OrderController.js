const Order = require('../model/order');


exports.getAllOrders = async (req, res) =>{
    try{
        const orders= await Order.find()
        res.json(orders)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleOrder = async (req, res) =>{
    try {
        const order = await Order.findOne({order_id: req.params.id})
        if(!orderr)
            return res.status(404).json({msg: 'Order Not found'})
        
        res.json(order)
    }
    catch(err){
        res.status(500).json({msg : err.messaasge})
    }
}
exports.addNewOrder = async(req,res)=>{
    try{
        const order = await Order.findOne({order_id:req.body.order_id})
        if(!order){
            const addedOrder = await Order.create(req.body)
            res.json(addedOrder)
        }
        else
        {
            res.json({msg:'Order already exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.updateOrder = async (req, res) =>{
    try{
        const order = req.body
        const fetchedOrder = await Order.findOne({order_id: user.order_id})
        if(fetchedOrder){
            await Order.updateOne(order)
            res.json(await Order.findOne({order_id: order.order_id}))
        }
        else{
            res.json({msg: 'Order doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
exports.deleteOrder = async (req, res)=>{
    try{
        const order = await Order.findOne({order_id: req.params.id})
        if(order){
            await Order.deleteOne({order_id:order.order_id})
            res.json(order)
        }
        else{
            res.json({msg: 'order doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}