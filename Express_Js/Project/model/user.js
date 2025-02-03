const mongoose = require('mongoose')

const userSchema = {
    user_id: {type: Number, required:true},
    username: {type: String, required:true},
   email_id: {type: String, required:true},
    book_id: {type: Number, required:true},
   
}
module.exports = mongoose.model("user", userSchema)