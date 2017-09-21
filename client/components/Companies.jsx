import React from 'react'
import {getCompanies} from '../actions/companies'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Companies extends React.Component {
componentDidMount(){
  this.props.dispatch(getCompanies())
}
  render() {

    return(
      <div>
        <Link to="/">Go Home</Link>
        <h1>companies</h1>
        <Link to='/companies/new'>Add A Company</Link>
        {this.props.companies.map(company => <div key={company.id}>{company.name}</div>)}
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {companies: state.companies}
}
export default connect(mapStateToProps)(Companies)
