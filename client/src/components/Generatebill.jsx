import React from 'react'
import '../css/Generatebill.css'
import Navbar from './Navbar'
import Leftarrow from './Leftarrow'

export default function Generatebill() {
  return (
    <>
    <Navbar/>
    <div className='generate-bill display-flex align-center justify-center'>
       <div className="generate-bill-block display-flex align-center flex-column justify-center">
        <Leftarrow/>
         <span className='bill-label'>Your total bill</span>
         <span className='bill-amount'>10000</span>
       </div>
    </div>
    </>
  )
}
