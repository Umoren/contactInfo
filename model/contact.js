`use strict`
const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    }, 
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);