const express = require('express');
var router = express.Router();

const controller = require('../controllers/transaction.controller');
router.get('/', controller.get);
router.post('/create', controller.create);
router.get('/complete/:id', controller.complete);
router.delete('/delete/:id', controller.delete);
module.exports = router;
