import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCompanies} from '../actions/companies'
import NewCompanyForm from './NewCompanyForm'

class AutoCompleteCompanyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      companies: [
        {name: "Countdown"},
        {name: "New World"},
        {name: "Pack'n Save"}
      ]
    }
  }
  selectCompany(company) {
    this.setState({search: company})
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submitDetails(e){
    let {companies} = this.state
    e.preventDefault()
    this.props.dispatch(getCompanies(companies,()=>{
      this.props.history.push('/')
    }))
  }

render() {
  let {search, companies} = this.state
  let filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(search.toLowerCase()) && company.name != search)
  return (
    <div>
      <h1>Search for a company:</h1>
      <form>
        <input type='text' name='search' value={search} onChange={this.updateSearch.bind(this)}/>
        {filteredCompanies.length != 0 || companies.find(company => company.name == search)
          ? filteredCompanies.map(company => (
            <p onClick={() => this.selectCompany(company.name)}>{company.name}</p>
          ))
          : <label>Create a new company
            <NewCompanyForm name={search}/>
          </label>
        }
        <input type='submit' value='save'/>
      </form>
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
