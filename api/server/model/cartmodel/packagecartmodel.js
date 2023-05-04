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
    destination: {
        type: String,
        required: true
    },
    speciality: {
        honeymoon: {
            type:Boolean,
            required:true
        },
        beach_holiday: {
            type:Boolean,
            required:true
        },
        wildlife_excursion: {
            type:Boolean,
            required:true
        },
        family_holiday: {
            type:Boolean,
            required:true
        },
    },
    duration: {
        type: Number,
        required: true
    },
    number_of_travellers: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    package_rating: {
        type: Number,
        required: true
    }
});

const PackageCartDb = mongoose.model('packagecart', schema)

module.exports = PackageCartDb;
