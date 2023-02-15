
import './App.css';

import Navbar from './components/Navbar';

import Home from './components/Home';
import Footer from './components/Footer'
import Healthy from './components/Healthy'
import NotFound from './components/NotFound';
import Laddos from './components/Laddos';
import Cart from './components/Cart';

import React, { useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  const [mode,setMode]=useState("light")
  const [color,setColor]=useState("dark")
  const [count,setCount]=useState(0)

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
    <>
    <BrowserRouter>
    <Navbar mode={mode} onclickButton={onclickButton} color={color} />
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Laddos">
            <Laddos onDecrease={onDecrease} onIncrease={onIncrease} count={count}/>
          </Route>
          <Route exact path="/Healthy">
            <Healthy onDecrease={onDecrease} onIncrease={onIncrease} count={count}/>
          </Route>
          <Route exact path="/Cart">
            <Cart onDecrease={onDecrease} onIncrease={onIncrease} count={count}/>
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
    </>
  );
}