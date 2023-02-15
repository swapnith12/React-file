import React from 'react'

export default function Card(props) {
  return (
    <div className="card mb-3 " style={{width: "18rem"}}>
        <img src={props.url} className="card-img-top" alt="card-image" width="100" height="150"/>
        <div className="card-body">
            <h5 className="card-title">Besan Laddos</h5>
            <p className="card-text"><span className='text-decoration-line-through'>Rs.480</span>  Rs.380</p>
            <a href="#" className="btn btn-warning">Add to Cart</a>
        </div>
    </div>
  )
}
