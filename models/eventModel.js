const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventDescription: String,
    eventDate: String,
    startTime: String,
    endTime: String,
    price: String,
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;