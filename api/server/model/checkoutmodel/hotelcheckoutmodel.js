const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  agent_name: {
    type: String,
    required: true,
  },
  // user_name: {
  //     type: String,
  //     required: true
  // },
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  checkout_date: {
    type: Date,
    required: true,
  },
  aditional_note: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  check_in_date: {
    type: Date,
    required: true,
  },
  check_out_date: {
    type: Date,
    required: true,
  },
  star_rating: {
    type: Number,
    required: true,
  },
  pricing: {
    type: Number,
    required: true,
  },
  room_selection: {
    type: String,
    required: true,
  },
  board_basis: {
    type: String,
    required: true,
  },
  facilities: {
    pool: {
      type: Boolean,
      required: true,
    },
    kids_play_area: {
      type: Boolean,
      required: true,
    },
    beach_access: {
      type: Boolean,
      required: true,
    },
  },
});

const hotelCheckoutdb = mongoose.model("hotelcheckout", schema);

module.exports = hotelCheckoutdb;
