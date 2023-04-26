const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    check_in_date: {
        type: Date,
        required: true
    },
    check_out_date: {
        type: Date,
        required: true
    },
    star_rating: {
        type: Number,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    },
    room_selection: {
        type: String,
        required: true
    },
    board_basis: {
        type: String,
        required: true
    },
    facilities: {
        type: String,
        required: true,
    },
});

const HotelReservationsDb = mongoose.model('hotelreservation', schema);

module.exports = HotelReservationsDb;