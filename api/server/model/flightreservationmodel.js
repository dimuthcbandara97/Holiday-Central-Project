const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    departure_destination: {
        type: String,
        required: true
    },
    arrival_destination: {
        type: String,
        required: true
    },
    departure_date: {
        type: Date,
        required: true
    },
    arrival_date: {
        type: Date,
        required: true
    },
    cabin_class: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    meal_preferences: {
        type: String,
        required: true
    },
    seat_selection: {
        type: String,
        required: true
    },
    airline: {
        type: String,
        required: true,
    }
});

const FlightReservationDb = mongoose.model('flightreservation', schema);

module.exports = FlightReservationDb;
