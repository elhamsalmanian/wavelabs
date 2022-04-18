
import React from 'react'
import { PaneTitle1, PaneTitle2}  from '../titles/PaneTitle'

const WhoWeWorkWith = () => {
  return (
    <div className='w-full m-auto  flex flex-col bg-[#2A92D0] text-white ' >
        <div className='m-auto w-[80%]'>        
            <div className='w-full flex flex-col align-top  py-10'>
                <PaneTitle1 className='text-black dark:text-white'>WHO WE WORK WITH</PaneTitle1>
                <div className='m-auto mt-1 text-left '>          
                    <PaneTitle2>Creating a new Realm of Opportunities</PaneTitle2>
                    <p className='py-2'>
                        Technology is disrupting the traditional industries and the way day-to-day business is done. This has created a new landscape of tech-oriented industries.
                    </p>
                    <p className='py-2'>
                        As technology is at our core, we choose to focus on these ‘Hybrid’ Industries.
                        We work with a wide variety of businesses, across startups, small & medium businesses and large enterprises that have originated in this landscape.
                        We also work with industries that have the vision to put technology at the forefront of their business.
                    </p>
                </div>
            </div>
            <div className='circle-container hidden md:block '>
                <div className='center'><img src='/images/who-we-work-with.png'/></div>     
                <div className='top-[-25px] left-[-10px] '><h5>Media & Entertainment</h5></div>
                <div className='top-[-25px] left-[410px]'><h5>Fintech</h5></div>
                <div className='top-[140px] left-[580px] '><h5>Healthcare</h5></div>       
                <div className='top-[400px] left-[590px] '><h5>Hi tech</h5></div>
                <div className='top-[580px] left-[400px]'><h5>Hospitality</h5></div>
                <div className='top-[580px] left-[80px]'><h5>Life Sciences</h5></div>
                <div className='top-[400px] left-[-130px]'><h5>Communications</h5></div>
                <div className='top-[140px] left-[-90px]'><h5>Retail Tech</h5></div>
                
                
            </div>
        </div>
       
    </div>
  )
}

export default WhoWeWorkWith