const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text: String,
    author: String,
    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Quote', quoteSchema);