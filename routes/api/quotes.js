const express = require('express');
const router = express.Router();
const QuotesCtrl = require('../../controllers/Quotes');

router.get('/', QuotesCtrl.index);


module.exports = router;