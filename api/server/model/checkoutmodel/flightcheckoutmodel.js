
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
        required: true,
        unique: true
    },
    checkout_date: {
        type: Date,
        required: true
    },
    additional_note: {
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
        indian: {
            type: Number,
            required: true
        },
        sri_lankan: {
            type: Number,
            required:true
        },
        italian:{
            type: Number,
            required:true
        }
    },
    seat_selection: {
        basic: {
            type: Number,
            required: true
        },
        widow: {
            type: Number,
            required: true
        },
        isle: {
            type: Number,
            required: true
        },
        middle: {
            type: Number,
            required: true
        }
    },
    airline: {
        type: String,
        required: true
    }
});

const FlightCheckoutDb = mongoose.model('flightcheckout', schema);

module.exports = FlightCheckoutDb;
