import React from 'react'
import Hero from '../hero/Hero'
import Specials from '../specials/Specials'
import CustomerSay from '../customers/CustomerSay'
import About from '../about/About'

const Main = () => {
  return (
    <main>
       <Hero/>
       <Specials/>
       <CustomerSay/>
       <About/>
    </main>
  )
}

export default Main
