const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    text: String,
    author: String,
    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);