const mongoose = require('mongoose')
const tutorial = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    category: { type: String },
    topic: { type: String },
    content: { type: String },
    date: { type: Date, default: new Date() }
})

module.exports = mongoose.model('Tutorials', tutorial)