const express = require('express');
var router = express.Router();

const controller = require('../controllers/auth.controller');

router.post('/login', controller.login);
router.post('/reset', controller.reset);
module.exports = router;
