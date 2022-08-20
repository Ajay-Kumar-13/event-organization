require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require('./passport');
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const fsx = require("fs-extra");

const app = express();
mongoose.connect(process.env.MONGO_URI);

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: Storage
}).single("file")

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'session',
    keys: ['cyberwolve'],
    maxAge: 24 * 60 * 60 * 100,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    // origin: 'https://eventorganization.herokuapp.com/',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            fsx.move(`uploads/${req.file.originalname}`, `./client/public/images/${req.body.name}.png`, err => {
                if (err) return console.log(err)
                console.log("success!!!");
            })
        }
    })
})

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
    })
}

app.listen(process.env.PORT || 3001, () => {
    console.log("server is up and running on port 3001");
})