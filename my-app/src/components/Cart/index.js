import React, { useState } from 'react'

export default function Card(props) {
    const onDecrease=()=>{
        props.onDecrease()
    }

    const onIncrease=()=>{
        props.onIncrease()
    }
    
  return (
    <div class="card mb-3" style={{width: "100rem"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src="Paal-Peda.jpg" class="img-fluid rounded-start" alt="Besan Laddo" width="300" height="200"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Panjeeri Laddo</h5>
                <p class="card-text">Quantity 350gms.</p>
                <p><span className='fs-bold' ><button type="button" className='btn btn-light' onClick={onDecrease}>-</button></span>  {props.count}  <span className='fs-bold' ><button type="button" className='btn btn-light' onClick={onIncrease}>+</button></span></p>
                <button type='button' className='btn btn-warning mb-2'>Add to Cart</button><br/>
                <button type='button' className='btn btn-warning'>Buy Now</button>
            </div>
            </div>
       </div>
    </div>
  )
}
