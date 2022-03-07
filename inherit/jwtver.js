var express = require('express');
var router = express.Router()
var mongoose = require("mongoose")
var jwt = require("jsonwebtoken")

exports.authenticate = (req, res, next) => {
    const bearerHeader = req.cookies['token'];
    token = bearerHeader;
    //authuser parameter returns the which user generates key...
    jwt.verify(token, jwtkey, (error, authdata) => {
        if (error) {
            res.json({
                "STATUS": "YOU ARE NOT AUTHORIZED PLEASE LOGIN...",
                "DETAIL": error
            })
        } else {
            next()
            console.log(authdata)
                //res.json({ token })

        }
    })
    if (bearerHeader == undefined) {
        res.send("Please Provide Token")
    }
}


// exports.auth = (req, res) => {
//     console.log("auth...")
// }