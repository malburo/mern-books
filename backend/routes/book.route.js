const express = require('express');
var router = express.Router();

const controller = require('../controllers/book.controller');

router.get('/', controller.get);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
