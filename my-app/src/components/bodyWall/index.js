import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'

import {Hourglass} from 'react-bootstrap-icons'

import './index.css'

function BodyWall() {
  return(
    <div className="body d-flex justify-content-center">
      <div className="contianer content d-flex flex-column">
        <div className="d-flex flex-column align-items-end ">
        <p className="text-dark align-center fs-3 fw-bold">Besan Laddos</p>
        <p className=" text-dark align-center">Available in Sugar & Jagerry</p>
        </div>
        <div className="d-flex flex-column align-items-end mt-auto ">
          <p className="text-danger fw-bold align-center">Limited Time Offer<span><Hourglass/></span></p>
          <div><button type="button" className="btn btn-warning align-center">Order Now</button></div>
        </div>
      </div>
    </div>
  ) 
}

export default BodyWall
