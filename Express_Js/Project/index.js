const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bookRouter = require('./Routes/BookRoutes')
const userRouter = require('./Routes/UserRoutes')
const orderRouter = require('./Routes/OrderRoutes')

app.use(express.json())
app.use("", bookRouter);
app.use("", userRouter);
app.use("",orderRouter);



app.listen('5000',()=>console.log('server running on 5000'))
mongoose.connect('mongodb://localhost:27017/BookStore')
.then(()=> console.log('database connected..'))
.catch((err) => console.log(err))

//app.get('/',(req,res)=>{
  //res.send('server reacted')
//})