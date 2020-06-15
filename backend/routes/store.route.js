const express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var router = express.Router();
const controller = require('../controllers/store.controller');

router.get('/', controller.get);
router.post('/create', upload.single('bookPictureUrl'), controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
