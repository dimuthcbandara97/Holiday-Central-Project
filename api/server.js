
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express(); // Change the variable name to "app" instead of "app1" and "app2" to avoid confusion
app.disable("x-powered-by");

// helmet security configuration
const helmet = require("helmet"); // Use "const" instead of "let" to declare the "helmet" variable since it's not reassigned
const cookieParser = require('cookie-parser');
app.use(helmet.hidePoweredBy());

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 4000;

// log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

// parse request to body parser
app.use(cookieParser()); // Call the "cookieParser" function with parentheses
app.use(bodyParser.urlencoded({ extended: true }));

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT); // Add the PORT number to the console log
});
