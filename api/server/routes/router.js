const express = require('express');
const route = express.Router()

const services = require('../services/render')

// importing all controllers
const controller = require('../controller/controller')
const backoffice = require('../controller/backofficecontroller')
const flight = require('../controller/flightreservationcontroller')
const hotel = require('../controller/hotelreservationscontroller')
const packagecontroller = require('../controller/packagereservationscontroller')
const logincontroller = require('../controller/logincontroller')
const travel = require('../controller/travelagentcontroller');


/***
 * 
 * @Description Root route
 * @method GET
 */

 route.get('/',flight.find)

// route.get('/',)


// API routes for users
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)


// API routes for backoffice
route.post('/api/backoffice',backoffice.create)
route.get('/api/backoffice',backoffice.find)
route.put('/api/backoffice/:id',backoffice.update)
route.delete('/api/backoffice/:id',backoffice.delete)

// API routes for flight reservation
route.post('/api/flight',flight.create)
route.get('/api/flight',flight.find)
route.put('/api/flight/:id',flight.update)
route.delete('/api/flight/:id',flight.delete)
route.get('/api/flight/count',flight.countBy)
route.get('/api/flight/filter',flight.findBy)

// API routes for hotel reservation
route.post('/api/hotel',hotel.create)
route.get('/api/hotel',hotel.find)
route.put('/api/hotel/:id',hotel.update)
route.delete('/api/hotel/:id',hotel.delete)

// API routes for package reservation
route.post('/api/package',packagecontroller.create)
route.get('/api/package',packagecontroller.find)
route.put('/api/package/:id',packagecontroller.update)
route.delete('/api/package/:id',packagecontroller.delete)

// API routes for Traveling controller
route.post('/api/travel',travel.create)
route.get('/api/travel',travel.find)
route.put('/api/travel/:id',travel.update)
route.delete('/api/travel/:id',travel.delete)

// API routes for login and register
route.post('/api/login',logincontroller.create)
route.get('/api/login',logincontroller.find)





module.exports = route


