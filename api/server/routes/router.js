const express = require('express');
const route = express.Router()

const services = require('../services/render')

// importing all controllers
const controller = require('../controller/controller')


/***
 * 
 * @Description Root route
 * @method GET
 */

route.get('/',services.homeRoutes)


// API routes for users
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)


// API routes for sensors

module.exports = route


