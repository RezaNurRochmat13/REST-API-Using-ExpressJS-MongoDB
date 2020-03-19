const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('students', studentSchema);