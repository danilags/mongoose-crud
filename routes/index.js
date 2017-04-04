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


router.get('/transaction', transactionController.getAllTransaction);
router.post('/transaction', transactionController.createTransaction);
router.put('/transaction/:id', transactionController.updateTransaction);
router.delete('/transaction/:id', transactionController.deleteTransaction);

router.post('/customer', customerController.createCustomer);
router.get('/customer', customerController.getAllCustomer);
router.put('/customer/:id', customerController.updateCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);

module.exports = router;
