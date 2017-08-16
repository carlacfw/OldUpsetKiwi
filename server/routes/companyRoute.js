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

router.post('/', (req, res) => {
  let db = req.app.get('db')
  companiesDb.saveCompany(db, req.body)
    .then(companies => {
      res.sendStatus(201)
    })
})

module.exports = router
