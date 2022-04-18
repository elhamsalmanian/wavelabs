import React from 'react'
import { WhoWeAreIcon } from '../../icons'

const FastFacts = () => {
  return (
    <div className='w-full m-0  bg-[#000]  ' >
        <div className='w-[90%]  md:w-[85%] lg:w-[80%]  mx-auto flex flex-col md:flex-row' >
            <div className=' w-[90%] m-0   md:w-[40%] flex flex-col align-top px-10'>
            <h1 className="my-6 text-2xl font-semibold text-gray-500 ">FAST FACTS</h1>
            <div className='m-auto mt-[10%] w-[250px] h-[250px] text-center '>          
                <div className="fast-facts-img">
                    <img src="/images/Industry.png"
                         alt=""                                      
                    /> 
                </div>
            </div>
            </div>
                
            <div className="m-0 w-full md:w-[60%]  flex flex-wrap">
                <div className="min-w-[240px] min-h-[240px] w-full  md:w-1/2  text-white bg-[#131313] dark:text-black dark:bg-[#f4f4f4]">
                    <div className='w-full h-full p-[40px] relative'>
                        <span className='text-7xl font-semibold mt-24'>7</span>
                        <sup className='text-4xl font-semibold align-sub ml-2 -top-10 '>+</sup>
                        <p className='absolute bottom-0 pb-10'>Years In Business</p>
                    </div>
                </div>
                <div className="min-w-[240px] min-h-[240px] w-full md:w-1/2  text-black bg-[#f4f4f4] dark:text-white dark:bg-[#131313]">
                    <div className='w-full h-full p-[40px] relative'>
                        <span className='text-7xl font-semibold mt-24'>200</span>
                        <sup className='text-4xl font-semibold align-sub ml-2 -top-10 '>+</sup>
                        <p className='absolute bottom-0 pb-10'>Projects Completed</p>
                    </div>
                </div>
                <div className="min-w-[240px] min-h-[240px] w-full md:w-1/2 text-black bg-[#f4f4f4] dark:text-white dark:bg-[#131313]">
                    <div className='w-full h-full p-[40px] relative'>
                        <span className='text-7xl font-semibold mt-24'>500</span>
                        <sup className='text-4xl font-semibold align-sub ml-2 -top-10 '>+</sup>
                        <p className='absolute bottom-0 pb-10'>Employees & Growing</p>
                    </div>
                </div>
                <div className="min-w-[240px] min-h-[240px] w-full md:w-1/2 text-white bg-[#131313] dark:text-black dark:bg-[#f4f4f4]">
                    <div className='w-full h-full p-[40px] relative'>
                        <span className='text-7xl font-semibold mt-24'>8</span>
                        <sup className='text-4xl font-semibold align-sub ml-2 -top-10 '>+</sup>
                        <p className='absolute bottom-0 pb-10'>Countries & Growing</p>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default FastFacts