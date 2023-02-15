import {Cart3} from 'react-bootstrap-icons'

import { Link } from 'react-router-dom'

import React from 'react'

const Navbar =(props)=>{
    const {mode,onclickButton,active}=props
    const onClickToggle=()=>{
        onclickButton();
    }
    const bag= mode==="light"?"black":"white"
    return(
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand text-primary fs-3" href="#">Home<span className="text-success">Sweets</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Laddos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/Laddos">Besan Laddo</Link></li>
                  <li><Link to="/Laddos">Rava Laddo</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <Link to="/Laddos"><li>Many More..</li></Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Healthy
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/Healthy">Panjeera Laddo</Link></li>
                  <li><Link to="/Healthy">Protein Laddo</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <Link to="/Healthy"><li>Many More..</li></Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Traditional
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Semya Payasam</a></li>
                  <li><a className="dropdown-item" href="#">Undarallu</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Many more...</a></li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch" onClick={onClickToggle}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault" >{mode==="light"?"Dark Mode":'Light Mode'}</label>
            </div>
            <div className={`p-3 mb-2 bg-${mode}`} style={{color: bag}}>
            <Link to={"/Cart"}><Cart3/></Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar; 

