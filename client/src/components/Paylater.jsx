import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/Paylater.css'
import Leftarrow from './Leftarrow'

export default function Paylater() {
  const [disabled, setDisabled] =useState(false);
  const handleClick = (e) => {
     e.preventDefault();
     setDisabled(true);
  }
  return (
    <>
    <Navbar/>
    <div className='paylater display-flex align-center justify-center'>
      <div className="paylater-block display-flex flex-column align-center">
      <Leftarrow/>
        <span className='pay-title'>Pay</span>
        <div className="credit-limit display-flex flex-column gap-10 align-center">
        <span className='credit-label'>Credit limit</span>
        <span className='credit-amount'>10000</span>
        </div>
        <div className="pay-main display-flex align-center flex-column">
           <span className="pay-amount">Amount to pay: <strong>{Math.floor(Math.random() * 500)}</strong></span>
           <button className={`pay-button cursor-${disabled ? 'disabled': 'pointer pay-hover'}`} disabled = {disabled} onClick={handleClick}>Pay</button>
        </div>
      </div>
    </div>
    </>
  )
}
