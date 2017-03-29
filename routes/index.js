var express = require('express');
var router = express.Router();
var url = 'mongodb://localhost/library';
var bookController = require("../controller/bookcontroller");
var customerController = require("../controller/customercontroller");
var transactionController = require("../controller/transactioncontroller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Index")
});

router.get('/books', bookController.getAllBook);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);


router.post('/transaction', transactionController.createTransaction);

router.post('/customer', customerController.createCustomer);

module.exports = router;
