const getCompanies = (db) => {
  return db('companies')
    .select('*')

}
const saveCompany = (db, company) => {
  return db('companies')
  .insert(company)
}
const saveComplaint = (db, complaint) => {
  return db('complaint')
  .insert(complaint)
}


module.exports = {
  getCompanies,
  saveCompany,
  saveComplaint
}
