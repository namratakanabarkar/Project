const mongoose = require("mongoose")

const HikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    image: {
        type: String,
        required: [true, "Image link required"]
    },
    distance: {
        type: Number,
        required: [true, "Distance is required"]
    },
    elevation: {
        type: Number,
        required: [true, "Elevation is required"]
    },
    hiketype: {
        type: String,
        required: [true, "Hike type is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
})

// creating schema
module.exports.Hike = mongoose.model('Hike', HikeSchema);