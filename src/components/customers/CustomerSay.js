import React from 'react'
import './CustomerSay.css'
import CustomerCard from '../customerCard/CustomerCard'

const CustomerSay = () => {
  return (
    <div className='custometSayContainer'>      
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
    </div>
  )
}

export default CustomerSay
