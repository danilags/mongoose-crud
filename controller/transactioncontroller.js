var db = require('../models/transaction');

let createTransaction = function(req, res) {
  let testbooklist;

  if (/[,]/.test(req.body.booklist)) {
    testbooklist = req.body.booklist.split(",")
  } else {
    testbooklist = req.body.booklist
  }
  // res.send("transss")
  db.create({
    "memberid"  : req.body.memberid,
    "days"      : req.body.days,
    "out_date"  : req.body.out_date,
    "due_date"  : req.body.due_date,
    "in_date"   : req.body.in_date,
    "fine"      : req.body.fine,
    "booklist"  : testbooklist
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

module.exports = {
  createTransaction
}
