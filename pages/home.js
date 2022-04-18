import React from 'react'
import Layout from '../containers/Layout'
import Header from '../components/Header'
import {WhoWeAre , FastFacts, WhatWeDo, HowWeDoIt, WhoWeWorkWith} from '../components/panes'

const home = () => {
  return (
    <div className='w-full '>       
        <Header/>    
        <WhoWeAre /> 
        <FastFacts/>   
        <WhatWeDo/>
        <HowWeDoIt/>
        <WhoWeWorkWith/>
    </div>
  )
}

export default home