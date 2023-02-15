import React, { useState } from 'react'



export default function Laddos() {
    const [count,setCount]=useState(0)

    const onDecrease=(event)=>{
        if (count>0){
            setCount(count-1)
        }
        setCount(0)
    }
    const onIncrease=(event)=>{
        if (count<4){
            setCount(count+1)
        }
        setCount(0)
    }
  return (
    <div>
      <div class="card mb-3" style={{width: "150rem"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src="Paal-Peda.jpg" class="img-fluid rounded-start" alt="Besan Laddo" width="300" height="200"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Besan Laddo</h5>
                <p class="card-text">Quantity 350gms.</p>
                <p><span className='fs-bold' onClick={onDecrease}>-</span>  {count}  <span className='fs-bold' onClick={onIncrease}>+</span></p>
                <button type='button' className='btn btn-warning'>Add to Cart</button>
            </div>
            </div>
       </div>
      </div>
      <br/>
      <div class="card mb-3" style={{width: "150rem"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src="Paal-Peda.jpg" class="img-fluid rounded-start" alt="Besan Laddo" width="300" height="200"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Rava Laddo</h5>
                <p class="card-text">Quantity 350gms.</p>
                <p><span className='fs-bold' onClick={onDecrease}>-</span>  {count}  <span className='fs-bold' onClick={onIncrease}>+</span></p>
                <button type='button' className='btn btn-warning'>Add to Cart</button>
            </div>
            </div>
       </div>
      </div>
    </div>
  )
}
