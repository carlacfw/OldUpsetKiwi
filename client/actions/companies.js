import request from 'superagent'


export function getCompanies() {
  return (dispatch) => {
    request.get('/api/companies')
    .end((err, res) => {
      if(err) {console.log(err);}
      dispatch(receiveCompanies(res.body));
    })
  }
}
export function addCompanyRequest(company,callback) {
  return (dispatch) => {
      request.post('/api/companies')
      .send(company)
      .end((err, res) => {
        if (err) {console.log(err.message)}
        //dispatch(addCompanyAction(res.body))
        callback()
      })
  }
}
function receiveCompanies(companies) {
  return {
    type: 'RECEIVE_COMPANIES',
    companies
  }
}
export const addCompanyAction = (company) => {
  return {
    type: 'ADD_COMPANY',
    company
  }
}
