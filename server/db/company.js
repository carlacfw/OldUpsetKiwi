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

const joinTables = (db) => {
  return db('companies')
  .join('complaint', 'companies.id', '=', 'complaint.company_id')
}

module.exports = {
  getCompanies,
  saveCompany,
  saveComplaint,
  joinTables
}
