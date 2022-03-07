require('dotenv').config();
var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;



var shampleschema = mongoose.Schema({
    name: {
        type: 'string',
        unique: false,
    },
    email: {
        type: 'string',
        unique: false,
    }
})


shampleschema.plugin(mongooseFieldEncryption, {
    fields: ["name", "email"],
    secret: process.env.shamplesecret,
    saltGenerator: function(secret) {
        return "1234567890123456";
    },
});

module.exports = mongoose.model("shample", shampleschema)