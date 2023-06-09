const express = require("express");
const route = express.Router();

// const services = require('../services/render')

// importing all controllers
const controller = require("../controller/controller");
const backoffice = require("../controller/backofficecontroller");
const flight = require("../controller/flightreservationcontroller");
const hotel = require("../controller/hotelreservationscontroller");
const packagecontroller = require("../controller/packagereservationscontroller");
const logincontroller = require("../controller/logincontroller");
const travel = require("../controller/travelagentcontroller");

// checkout controllers
const flightcheckout = require("../controller/checkoutcontroller/flightcheckoutcontroller");
const hotelcheckout = require("../controller/checkoutcontroller/hotelcheckoutcontroller");
const packagecheckout = require("../controller/checkoutcontroller/packagecheckoutcontroller");

// cart controllers
const flightcart = require("../controller/cartcontroller/flightcartcontroller");
const hotelcart = require("../controller/cartcontroller/hotelcartcontroller");
const packagecart = require("../controller/cartcontroller/packagecartcontroller");

/***
 *
 * @Description Root route
 * @method GET
 */

route.get("/", flight.find);

// API routes for users
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

// API routes for backoffice
route.post("/api/backoffice", backoffice.create);
route.get("/api/backoffice", backoffice.find);
route.put("/api/backoffice/:id", backoffice.update);
route.delete("/api/backoffice/:id", backoffice.delete);

// API routes for flight reservation
route.post("/api/flight", flight.create);
route.get("/api/flight", flight.find);
route.put("/api/flight/:id", flight.update);
route.delete("/api/flight/:id", flight.delete);
route.get("/api/flight/count", flight.countBy);
route.get("/api/flight/filter", flight.findBy);
route.get("/api/flight/filter_search", flight.findBySearch);
route.get("/api/flight/count_search", flight.countBySearch);

// API routes for hotel reservation
route.post("/api/hotel", hotel.create);
route.get("/api/hotel", hotel.find);
route.put("/api/hotel/:id", hotel.update);
route.delete("/api/hotel/:id", hotel.delete);
route.get("/api/hotel/count", hotel.countBy);
route.get("/api/hotel/filter", hotel.findBy);
route.get("/api/hotel/filter_search", hotel.findBySearch);
route.get("/api/hotel/count_search", hotel.countBySearch);

// API routes for package reservation
route.post("/api/package", packagecontroller.create);
route.get("/api/package", packagecontroller.find);
route.put("/api/package/:id", packagecontroller.update);
route.delete("/api/package/:id", packagecontroller.delete);
route.get("/api/package/count", packagecontroller.countBy);
route.get("/api/package/filter", packagecontroller.findBy);
route.get("/api/package/filter_search", packagecontroller.findBySearch);
route.get("/api/package/count_search", packagecontroller.countBySearch);

// API routes for Traveling controller
route.post("/api/travel", travel.create);
route.get("/api/travel", travel.find);
route.put("/api/travel/:id", travel.update);
route.delete("/api/travel/:id", travel.delete);

// API routes for login and register
route.post("/api/login", logincontroller.create);
route.get("/api/login", logincontroller.find);

// API routes for checkout
route.post("/api/checkout/flight", flightcheckout.create);
route.post("/api/checkout/hotel", hotelcheckout.create);
route.post("/api/checkout/package", packagecheckout.create);

// API routes for checkout display
route.get("/api/checkout/flight", flightcheckout.find);
route.get("/api/checkout/hotel", hotelcheckout.find);
route.get("/api/checkout/package", packagecheckout.find);

// API routes for cart
route.post("/api/cart/flight", flightcart.create);
route.post("/api/cart/hotel", hotelcart.create);
route.post("/api/cart/package", packagecart.create);

// API routes for cart display
route.get("/api/cart/flight", flightcart.find);
route.get("/api/cart/hotel", hotelcart.find);
route.get("/api/cart/package", packagecart.find);

// Flight carts delete
route.delete("/api/cart/flight", flightcart.delete);
route.delete("/api/cart/hotel", hotelcart.delete);
route.delete("/api/cart/package", packagecart.delete);

module.exports = route;
