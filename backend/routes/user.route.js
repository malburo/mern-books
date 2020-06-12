const express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');

router.get('/', controller.get);
router.delete('/delete/:id', controller.delete);

module.exports = router;
