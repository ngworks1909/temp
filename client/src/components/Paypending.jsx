import React, { useState } from 'react'
import '../css/Paypending.css'
import Navbar from './Navbar'
import Leftarrow from './Leftarrow';

export default function Paypending() {
    const [disabled, setDisabled] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setDisabled(true);
    }
  return (
    <>
    <Navbar/>
    <div className='pay-pending display-flex align-center justify-center'>
       <div className="pay-pending-block display-flex flex-column justify-around">
        <Leftarrow/>
           <div className="view-due display-flex align-center flex-column">
            <span className='pending-label'>Your bill amount</span>
              <span className='pending-due'>10000</span>
           </div>
           <div className="pay-due display-flex align-center justify-center">
              <button className={`pending-button display-flex cursor-${disabled ? 'disabled': 'pointer pay-hover'}`} disabled = {disabled} onClick={handleClick}>Pay <strong>10000</strong></button>
           </div>
       </div>
    </div>
    </>
  )
}
