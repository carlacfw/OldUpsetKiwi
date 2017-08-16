import React from 'react'
import {connect} from 'react-redux'


class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newCompany: {
        company_id: 1,
        name: ''
      }
    }
  }

  submitDetails(e){
    let {newCompany} = this.state
    e.preventDefault()
    this.props.dispatch(addCompanyRequest(newCompany))
  }

  render() {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log({state});
  return {}
}


export default connect(mapStateToProps)(Form)
