const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    agent_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true ,
        unique: true
    },
    checkout_date: {
        type: Date,
        required: true
    },
    aditional_note: {
        type: String,
        required: true
    },
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

const FlightCheckoutDb = mongoose.model('flightcheckout', schema);

module.exports = FlightCheckoutDb;
