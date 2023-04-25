const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Destination: {
        type: String,
        required: true
    },
    CheckInDate: {
        type: Date,
        required: true
    },
    CheckOutDate: {
        type: Date,
        required: true
    },
    StarRating: {
        type: Number,
        required: true
    },
    Pricing: {
        type: Number,
        required: true
    },
    RoomSelection: {
        type: String,
        required: true
    },
    BoardBasis: {
        type: String,
        required: true
    },
    Facilities: {
        type: String,
        required: true,
        unique: true
    },
});

const HotelReservationsDb = mongoose.model('hotelreservation', schema);

module.exports = HotelReservationsDb;