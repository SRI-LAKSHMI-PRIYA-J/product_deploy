const mongoose = require('mongoose')

const orderSchema = {
    order_id: {type: Number, required:true},
    user_id: {type: Number, required:true},
   
    book_id: {type: Number, required:true},
   
}
module.exports = mongoose.model("order", orderSchema)