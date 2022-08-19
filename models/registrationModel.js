const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema ({
    eventName: String,
    email: String,
    date: String
})

const register = mongoose.model("registeredUser", registrationSchema);

module.exports = register;