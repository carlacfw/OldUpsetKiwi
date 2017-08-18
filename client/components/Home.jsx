import React from 'react'
import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div className="Home">
      {/*<Link to="/companies"><button>Companies</button></Link>*/}
      {/*<Link to="/complaints/new"><button>Make A Complaint</button></Link>*/}
      <Link to="/autocompleteform"><button>Add a complaint</button></Link>
    </div>
  )
}
