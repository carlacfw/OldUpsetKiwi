import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCompanies} from '../actions/companies'
import NewCompanyForm from './NewCompanyForm'

class AutoCompleteCompanyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(getCompanies())
  }
  selectCompany(company) {
    this.setState({search: company})
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  redirectToComplaintForm(e){
    e.preventDefault()
    console.log(this.state)
    this.props.history.push('/complaints/new')

  }

render() {
  let {search} = this.state
  let {companies} = this.props
  let filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(search.toLowerCase()) && company.name != search)
  return (
    <div className='form-group'>
      <h1>Search for a company:</h1>
      <form onSubmit={this.redirectToComplaintForm.bind(this)}>
        <input type='text' className="form-control" name='search' value={search} onChange={this.updateSearch.bind(this)}/>
        <input type='submit' value='Save'/>
      </form>
      {filteredCompanies.length != 0 || companies.find(company => company.name == search)
        ? filteredCompanies.map((company, i) => (
          <p onClick={() => this.selectCompany(company.name)} key={i}>{company.name}</p>
        ))
        : <label>Create a new company
        <NewCompanyForm name={search} {...this.props} />
      </label>
    }
      <Link to="/">Go Home</Link>
    </div>
  )
 }
}

function mapStateToProps(state) {
  console.log(state);
  return {companies: state.companies}
  }
export default connect(mapStateToProps)(AutoCompleteCompanyForm)
