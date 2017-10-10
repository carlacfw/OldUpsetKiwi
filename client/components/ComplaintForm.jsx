import React from 'react'
import {connect} from 'react-redux'
import {addComplaintRequest} from '../actions/companies'
import {Link} from 'react-router-dom'

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
  submitDetails(e){
    let {newComplaint} = this.state
    e.preventDefault()
    this.props.dispatch(addComplaintRequest(newComplaint,()=>{
      this.props.history.push('/')
    }))
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
          <input name='title' placeholder='Complaint Title' onChange={this.handleChange.bind(this)} value={this.state.newComplaint.title}/>
          <input name='complaint' placeholder='Complaint' onChange={this.handleChange.bind(this)} value={this.state.newComplaint.complaint}/>
          <input type='submit' value='save'/>
        </form>
          <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default connect()(ComplaintForm)
