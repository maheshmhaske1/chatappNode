require("dotenv").config();
var mongoose = require('mongoose')
var date_time = require('../inherit/current_date_time')
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;


var messageschema = new mongoose.Schema({
    from: {
        type: 'string',
        unique: false,
    },
    to: {
        type: 'string',
        unique: false
    },
    messages: {
        type: 'string',
        unique: false
    },
    time: {
        type: 'string',
        unique: false
    },
    date: {
        type: 'string',
        unique: false
    },
})


//for encrypt data
messageschema.plugin(mongooseFieldEncryption, {
    fields: ["from", "to", "messages", "time", "date"],
    secret: process.env.messagesecretkey,
    saltGenerator: function(secret) {
        return "1234567890123456";
    },
});


module.exports = mongoose.model("message", messageschema)