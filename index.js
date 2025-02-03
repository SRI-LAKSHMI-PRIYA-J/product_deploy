const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://SriLakshmiPriyaJ:Slp2005p@mycluster.hnuup.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);
console.log('nwe thing is updated')

//app.get('/', (req, res)=>{
 //res.send('server reacted...')})
