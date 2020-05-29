const express = require('express');
const router = express.Router();
const QuotesCtrl = require('../../controllers/Quotes');

router.get('/quotes', QuotesCtrl.index);


module.exports = router;