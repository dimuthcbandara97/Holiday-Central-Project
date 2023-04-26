const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')


const connectDB = require('./server/database/connection')

const app1 = express()
app1.disable("x-powered-by");

// helmet security configuration
let helmet = require("helmet");
// const cookieParser = require('cookie-parser')
let app2 = express(); // Compliant
app2.use(helmet.hidePoweredBy());

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 4000

// log request
app2.use(morgan('tiny'));

//mongodb connection
connectDB()

// parse request to body parser
// app2.use(cookieParser) 
app2.use(bodyParser.urlencoded({ extended: true }))


// loaed routers
app2.use('/',require('./server/routes/router'))

app2.listen(PORT, () => {
    console.log("Server is running on port ")
})