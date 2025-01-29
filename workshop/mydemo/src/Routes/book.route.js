const express = require('express');
const router = express.Router();
const bookController = require("../Controller/book.controller")

router.get('/', bookController.getBooks);
router.post('/books', bookController.addBooks);


module.exports = router;