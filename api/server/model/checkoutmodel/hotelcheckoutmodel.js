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
        deluxe:{
            type:Boolean,
            required:true
        },
        super_deluxe:{
            type:Boolean,
            required:true
        },
        suite:{
            type:Boolean,
            required:true
        },
    },
    board_basis: {
        full_board:{
            type:Boolean,
            required:true
        },
        bread:{
            type:Boolean,
            required:true
        },
        breakfast:{
            type:Boolean,
            required:true
        },
    },
    facilities: {
        pool:{
            type:Boolean,
            required:true
        },
        kids_play_area: {
            type:Boolean,
            required:true
        },
        beach_access:{
            type:Boolean,
            required:true
        }
    },
});

const hotelCheckoutdb = mongoose.model('hotelcheckout', schema);

module.exports = hotelCheckoutdb;