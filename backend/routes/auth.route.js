const express = require('express');
var router = express.Router();

const controller = require('../controllers/auth.controller');
const { ensureAuthMiddleware } = require('../middlewares/auth.middleware');
router.post('/login', controller.login);
router.post('/reset', controller.reset);
module.exports = router;
