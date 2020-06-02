const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/quotes');

router.get('/quotes', quotesCtrl.index);
router.use(require('../../config/auth'));

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;