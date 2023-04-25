require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() =>console.log('Connected to Database'))

app.use(express.json())

// For the subsribers
const subscribeRouter = require('./routes/subscribers')
app.use('/subscribers', subscribeRouter)

app.listen(4000,()=> console.log('Server Started'))

