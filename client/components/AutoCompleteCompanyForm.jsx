import React from 'react'
import {connect} from 'react-redux'

class AutoCompleteCompanyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: [
        "Countdown",
        "New World",
        "Pack'n Save"
      ]
    }
  }
}

render() {
  return (
    <div>
      <h1>Search for a company:</h1>
      <form>
        <input type='text' name='companies'/>
        <input type='submit' value='save'/>
      </form>
      <Link to="/">Go Home</Link>
    </div>
  )
}













export default connect()(AutoCompleteCompanyForm)
