import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import giphy from './giphy.gif'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark  navbar-dark ">
          <div className="container-fluid ">
          <img src={giphy} alt=" Logo" style={{width:40, }} className="rounded-pill mx-2"/> 
            <Link className="navbar-brand " to="/">NewsAdda</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                   <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link></li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link></li>
                
              </ul>
              {/* darkMode */}
              <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'} `}>
                <input className="form-check-input " onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label text-light " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
             </div>
             {/* darkMode */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
