import React from 'react'
import './Donation.css'
import donation from './donation.jpg'

function Donation() {
  return (
    <div className='containter'>
        <img className='donation' src={donation} alt="" />
    </div>
  )
}

export default Donation