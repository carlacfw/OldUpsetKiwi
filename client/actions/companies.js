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
function receiveCompanies(companies) {
  return {
    type: 'RECEIVE_COMPANIES',
    companies
  }
}
