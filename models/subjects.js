const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isCompulsory: {
        type: Boolean
    }
}, {timestamps: true})

const Subjects = mongoose.model('Subjects', subjectsSchema)

module.exports = Subjects