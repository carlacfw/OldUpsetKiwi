import React from 'react'
import {connect} from 'react-redux'
//import {addCompanyRequest} from '../actions/companies'


class ComplaintForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newComplaint: {
        complaint: '',
        title: ''
      }
    }
  }
//this is the complaint table form,
//keep changing this file to be only the complaint form
//create an action and a reducer file for complaint
//add here the title input too
  submitDetails(e){
    let {newComplaint} = this.state
    e.preventDefault()
    // this.props.dispatch(addCompanyRequest(newCompany,()=>{
    //   this.props.history.push('/')
    // }))
  }
  handleChange(e) {
    let {newComplaint} = this.state
    newComplaint[e.target.name] = e.target.value
    this.setState({
      newComplaint
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <input name='complaint' onChange={this.handleChange.bind(this)} value={this.state.newComplaint.complaint}/>
          <input type='submit' value='save'/>
        </form>
      </div>
    )
  }
}

export default connect()(ComplaintForm)
