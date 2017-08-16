import React from 'react'
import {connect} from 'react-redux'
import {addCompanyRequest} from '../actions/companies'


class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newCompany: {
        name: ''
      }
    }
  }

  submitDetails(e){
    let {newCompany} = this.state
    e.preventDefault()
    this.props.dispatch(addCompanyRequest(newCompany,()=>{
      this.props.history.push('/')
    }))
  }
  handleChange(e) {
    this.setState({
      newCompany: {
        ...this.state.newCompany,
        [e.target.name]:e.target.value
      }
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <input name='name' onChange={this.handleChange.bind(this)} value={this.state.newCompany.name}/>

          <input type='submit' value='save'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log({state});
  return {}
}


export default connect(mapStateToProps)(Form)
