const express = require('express')

// paths
var auth = require("../inherit/jwtver")

var router = express.Router()


function authenticate(req, res, next) {
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



router.get('/', function(req, res) {
    res.cookie("token", "", { expires: new Date(0) });
    res.render('home')
        //res.json({ "status": "Logged out" })
})

module.exports = router