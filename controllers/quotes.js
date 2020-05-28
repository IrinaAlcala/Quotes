const Quote = require('../models/Quote');

module.exports = {
    index
}

async function index(req, res) {
    const Quotes = await Quote.find({});
    res.status(200).json(Quotes);
}