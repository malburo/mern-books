const express = require('express');
var router = express.Router();

const controller = require('../controllers/book.controller');

router.get('/', controller.get);
router.post('/', controller.create);
// router.put("/:id", controller.update)
// router.delete("/:id", controller.delete);

module.exports = router;
