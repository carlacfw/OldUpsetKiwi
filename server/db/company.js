const getCompanies = (db) => {
  return db('companies')
    .select('*')
}

module.exports = {
  getCompanies
}
