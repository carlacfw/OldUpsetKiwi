const getCompanies = (db) => {
  return db('companies')
    .select('*')

}
const saveCompany = (db, company) => {
  return db('companies')
  .insert(company)

}

module.exports = {
  getCompanies,
  saveCompany
}
