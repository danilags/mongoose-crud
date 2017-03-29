var db = require("../models/customer")

let createCustomer = function(req, res) {
  let newCustomer = new db({
    "name"      : req.body.name,
    "memberid"  : req.body.memberid,
    "address"   : req.body.address,
    "zipcode"   : req.body.zipcode,
    "phone"     : req.body.phone
  })

  newCustomer.save(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

module.exports = {
  createCustomer
}