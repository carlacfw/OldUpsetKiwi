var express = require('express')
var router = express.Router()

var companiesDb = require('../db/company')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  companiesDb.getCompanies(db)
    .then(companies => {
      res.json(companies)
    })
})

module.exports = router
