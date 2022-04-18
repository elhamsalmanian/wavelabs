
// Stroke Utilities for styling the stroke of SVG elements.
/* Responsive Design
Using responsive utility variants to build adaptive user interfaces.
There are five breakpoints by default, inspired by common device resolutions:
Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... } */

/* Mobile First
By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities 
(like md:uppercase) only take effect at the specified breakpoint and above.
Targeting mobile screens

you need to use the unprefixed version of a utility, not the sm: prefixed version.

Don’t think of sm: as meaning “on small screens”, think of it as “at the small breakpoint“.

Don't use sm: to target mobile devices

<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
Use unprefixed utilities to target mobile, and override them at larger breakpoints

<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>   */

//https://tailwindcss.com/docs/stroke

import React from 'react'
import { useTheme } from 'next-themes'
import { PaneTitle1, PaneTitle2}  from '../titles/PaneTitle'
import { ArtificialIntelligenceIcon,
         ConnectivityIcon,
         DataEngineeringIcon,
         DigitalEngineeringIcon,
         ExperienceDesignIcon,
         IndustryIcon,
         TechnologyEnabledServicesIcon }
    from '../../icons'

const WhatWeDo = () => {
  const { theme } = useTheme()

  return (
    <div className='w-[80%] mx-auto mt-10 mb-10  flex flex-col' >
        <div className='w-full flex flex-col align-top  px-10'>
            <PaneTitle1>WHAT WE DO</PaneTitle1>
            <div className='m-auto mt-1 text-left '>          
            <PaneTitle2>Offering Technology Services and Solutions to help Embrace the Future</PaneTitle2>
            <p className='py-2'>
                While technologies continue to evolve, the end goal remains the same for us – adapt and implement the best-fit solution that will drive greater efficiencies, 
                improve user-experiences and solve real world business challenges.
            </p>
            <p className='py-2'>
                We continuously invest in building deep competencies in these practices to help you realize your vision for the future.
            </p>
            </div>
        </div>
        
        <div className="m-0 p-2 w-full  flex flex-wrap gap-0 justify-center   ">
            <div className="p-2 min-w-[300px] min-h-[200px] w-full  md:w-1/2  lg:w-1/3 ">
                <div className=' card '>
                    <ExperienceDesignIcon className="absolute top-4 right-4" 
                                          stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  }  />                
                    <div className='card-overlay  '>  
                        <h2 className='absolute top-3 font-semibold '>Experience Design</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Design that drives Tangible Results</p>
                    </div>
                
                </div>
            </div>
            <div className="p-2 min-w-[300px] min-h-[200px]  w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <DigitalEngineeringIcon className="absolute top-4 right-4" 
                                            stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  } />                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Digital Engineering</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Reimagine your Business in a New Digital way </p>
                    </div>               
                </div>
            </div>
            <div className="p-2 min-w-[300px] min-h-[200px] w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <DataEngineeringIcon className="absolute top-4 right-4" 
                                         stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  }/>                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Data Engineering</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Turning Data into Decision Drivers</p>
                    </div>               
                </div>
            </div>
            <div className="p-2 min-w-[300px] min-h-[200px] w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <ArtificialIntelligenceIcon  className="absolute top-4 right-4"  
                                                 stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  } />                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Artificial Intelligence</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Unlock your True Potential with AI Initiatives</p>
                    </div>               
                </div>
            </div>
            <div className="p-2 min-w-[300px] min-h-[200px] w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <ConnectivityIcon className="absolute top-4 right-4" 
                                      stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  }  />                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Connectivity</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Accelerate The Journey To Future Connectivity</p>
                    </div>               
                </div>
            </div>
            <div className="p-2 min-w-[300px] min-h-[200px] w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <IndustryIcon className="absolute top-4 right-4" 
                                  stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  }/>                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Industry 4.0</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Transforming the Landscape of doing Business</p>
                    </div>               
                </div>
            </div> 
            <div className="p-2 min-w-[300px] min-h-[200px] w-full md:w-1/2 lg:w-1/3 ">
                <div className=' card '>
                    <TechnologyEnabledServicesIcon className="absolute top-4 right-4" 
                                                   stroke = {theme === "dark" ? "#29b6f6" :  "#2a92d0"  } />                
                    <div className='card-overlay '>  
                        <h2 className='absolute top-3 font-semibold '>Technology Enabled Services</h2>                             
                        <p className='absolute bottom-0 text-sm pb-10'>Delivering Technology Enabled Business Solutions </p>
                    </div>               
                </div>
            </div> 
        </div>
    </div>
  )
}

export default WhatWeDo