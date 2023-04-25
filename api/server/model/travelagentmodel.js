const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    gender: String,
    status: String,
    imageurl: String,
});

const TravelAgentDb = mongoose.model('travelagent',schema)

module.exports= TravelAgentDb;



