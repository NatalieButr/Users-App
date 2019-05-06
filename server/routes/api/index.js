const express = require('express');
const router = express.Router();

router.use('/profile', require('./users'));

module.exports = router;