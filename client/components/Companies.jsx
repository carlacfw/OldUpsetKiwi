import React from 'react'
import {getCompanies} from '../actions/companies'
import {connect} from 'react-redux'

class Companies extends React.Component {
componentDidMount(){
  this.props.dispatch(getCompanies())
}
  render() {

    return(
      <div>
        <h1>companies</h1>
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
