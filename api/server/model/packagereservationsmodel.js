const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    numberOfTravellers: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    packageRating: {
        type: Number,
        required: true
    }
});

const PackageReservationsDB = mongoose.model('package_reservations', schema)

module.exports = PackageReservationsDB;
