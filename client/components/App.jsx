import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Companies from './Companies'
import Form from './Form'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Companies} />
      <Route path='/form' component={Form}/>
    </div>
  </Router>
)

export default App
