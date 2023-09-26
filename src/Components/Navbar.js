import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clickme">clickme</Link>
              </li>


            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.style} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: propTypes.string.isRequired,          //.string specifies the type of the prop passed
  about: propTypes.string.isRequired           // is requires returns undefined when no props is passed 
}

Navbar.defaultProps = {
  title: "default title",       // when no props are passed then the default value is set
  about: 'default description'
}