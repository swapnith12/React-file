import React from 'react'
import Card from '../Card'

export default function Features() {
  return (
    <>
    <div className='container'>
      <h1 className='text-warning fs-2 fs-bold'>Features</h1>
      <div className='container d-flex flex-wrap justify-content-between'>
      <Card url={"besan-laddo.jpg"}/>
      <Card url={"besan-laddo.jpg"}/>
      <Card url={"besan-laddo.jpg"}/>
      <Card url={"besan-laddo.jpg"}/>
      <Card url={"besan-laddo.jpg"}/>
      <Card url={"besan-laddo.jpg"}/>
      </div>
    </div>
    </>
  )
}
