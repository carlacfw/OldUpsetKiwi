var express = require('express')
var router = express.Router()

var companiesDb = require('../db/company')

router.post('/', (req, res) => {
  let db = req.app.get('db')
  companiesDb.saveComplaint(db, req.body)
    .then(complaint => {
      res.sendStatus(201)
    })
})

module.exports = router
