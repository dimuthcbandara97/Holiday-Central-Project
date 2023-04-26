
const axios = require('axios');



// Home Route
exports.homeRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/users')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}

// backoffice routes
exports.officeRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/backoffice')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}

// Flights routes

exports.flightRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/flight')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}
// Hotels routes

exports.hotelRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/hotel')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}

// packages routes

exports.packageRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/package')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}
// Travel routes

exports.travelRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/travel')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}