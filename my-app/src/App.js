
import './App.css';

import Navbar from './components/Navbar';

import BodyWall from './components/BodyWall';

import React, { useState } from 'react'


export default function App() {
  const [mode,setMode]=useState("light")
  const [color,setColor]=useState("dark")

  const onclickButton = ()=>{
    if(mode==="dark"){
      setMode("light")
      setColor("dark")
    }
    else{
      setMode('dark')
      setColor("light")
    }
  }
  

  return (
    <>
    <Navbar mode={mode} onclickButton={onclickButton} color={color} />
    <BodyWall/>
    </>
  );
}