import React from 'react'
import {connect} from 'react-redux'
import {addCompanyRequest} from '../actions/companies'
import {Link} from 'react-router-dom'

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newCompany: {
        name: this.props.name || '',
        email: '',
        website: ''
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("new props", nextProps)
    let {newCompany} = this.state
    newCompany.name = nextProps.name
    this.setState({newCompany})
  }
  submitDetails(e){
    let {newCompany} = this.state
    e.preventDefault()
    this.props.dispatch(addCompanyRequest(newCompany,()=>{
      console.log(this.props);
      this.props.history.push('/complaints/new')
    }))
  }
  handleChange(e) {
    let {newCompany} = this.state
    newCompany[e.target.name] = e.target.value
    this.setState({
      newCompany
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <input name='name' placeholder="Company Name" onChange={this.handleChange.bind(this)} value={this.state.newCompany.name}/>
          <input name='email' placeholder="Company Email" onChange={this.handleChange.bind(this)} value={this.state.newCompany.email}/>
          <input name='website' placeholder="Company Website" onChange={this.handleChange.bind(this)} value={this.state.newCompany.website}/>
          <input type='submit' value='save'/>
        </form>
      </div>
    )
  }
}


export default connect()(Form)
