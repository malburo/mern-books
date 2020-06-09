const express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.post('/register', controller.postCreate);

module.exports = router;
