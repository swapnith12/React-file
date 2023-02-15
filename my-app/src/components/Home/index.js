import BodyWall from '../BodyWall'

import React from 'react'
import Features from '../Features'


export default function Home() {
  return (
    <>
    <div>
      <BodyWall/>
      <hr className='text-warning border border-warning opacity-100'/>
      <h1 className='fs-bold text-center'>Bringing Home Sweets to Door Step!</h1>
      <p className='text-dark fs-3 text-center'>These is a SweetTech company Website Clone</p>
    </div>
    <div>
      <Features/>
    </div>
    </>
  )
}
