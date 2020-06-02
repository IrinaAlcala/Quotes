const Quote = require('../models/quote');
//const User = require('../models/user');

module.exports = {
    index
}

async function index(req, res) {
    const quotes = await Quote.find({});
    res.status(200).json(quotes);
}