require('dotenv').config();
const router = require("express").Router();
const passport = require("passport");
const newUser = require("../models/usersModel");
const Query = require("../models/queryModel");
const Event = require("../models/eventModel");
const register = require("../models/registrationModel");

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login with Your Gitam Mail Only!"
    })
})

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
        })
    }
})

router.get("/google/home", passport.authenticate("google", {
    successRedirect: process.env.REDIRECT_URI + "/home",
    failureRedirect: "/auth/login/failed",
}))

router.get("/newUser/:email", (req, res) => {
    const userEmail = req.params.email;
    console.log("userEmail", userEmail);
    newUser.find({ email: userEmail }, (err, docs) => {

        if (docs.length == 0) {
            res.json({
                registered: false
            })

        } else {
            res.json({
                registered: true
            })
        }
    })
})

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.post("/newUser/save", (req, res) => {
    newUser.create({
        email: req.body.email,
        registration: req.body.registration,
        year: req.body.year,
    })

        .then(response => {
            res.json({
                success: true,
            })
        })
        .catch(err => {
            res.json({
                success: false,
            })
        })

})

router.post("/newQuery/save", (req, res) => {
    Query.create({
        RegistrationNumber: req.body.RegistrationNumber,
        Name: req.body.Name,
        Query: req.body.Query,
    })
        .then(response => {
            res.json({
                success: true,
            })
        })
        .catch(err => {
            res.json({
                success: false,
            })
        })
})

router.get("/getRegno/:email", (req, res) => {
    newUser.find({ email: req.params.email }, (err, docs) => {
        res.json({
            regNo: docs[0].registration,
        })
    })
})

router.post("/createEvent", (req, res) => {
    Event.create({
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventDate: req.body.eventDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        price: req.body.price,
    })
        .then(response => {
            res.json({
                success: true
            })
        })
        .catch(response => {
            res.json({
                success: false
            })
        })
})

router.get("/presentEvents", (req, res) => {
    Event.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        }

    })
})

router.post("/registerEvent", (req, res) => {
    register.create({
        email: req.body.email,
        eventName: req.body.eventName,
        date: req.body.date
    })
        .then(response => {
            res.json({
                success: true
            })
        })
        .catch(response => {
            res.json({
                success: false
            })
        })
})

module.exports = router;