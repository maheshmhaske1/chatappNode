var express = require('express');
var router = express.Router()

var ragister = require('../model/ragister.model')

router.get('/', function(req, res) {
    res.render("ragister")
})

router.post('/', function(req, res) {
    //console.log("ragister hit...")
    new ragister({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
    }).save().then((result) => {
        return res.json({ status: true })
    }).catch((err) => {
        res.json(err)
    });
})

module.exports = router