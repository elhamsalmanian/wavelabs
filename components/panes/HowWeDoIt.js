import React from 'react'
import { useTheme } from 'next-themes'
import { PaneTitle1, PaneTitle2}  from '../titles/PaneTitle'
import { InsightIcon,
         SkyshotIcon,
         InnovationIcon,
         DevelopmentLifecycleIcon,
         LeanProductIcon,
         ProfessionalServicesIcon,
         ChannelPartnerIcon }
    from '../../icons'

const HowWeDoIt = () => {
  const { theme } = useTheme()

  return (
    <div className='w-[80%] mx-auto mt-10 mb-10  flex flex-col' >
        <div className='w-full flex flex-col align-top  px-10'>
            <PaneTitle1>HOW WE DO IT</PaneTitle1>
            <div className='m-auto mt-1 text-left '>          
                <PaneTitle2>Offering Technology Services and Solutions to help Embrace the Future</PaneTitle2>
                <p className='py-2'>
                    While technologies continue to evolve, the end goal remains the same for us – adapt and implement the best-fit solution that will drive greater efficiencies, improve user-experiences and solve real world business challenges.
                </p>
                <p className='py-2'>
                    We continuously invest in building deep competencies in these practices to help you realize your vision for the future.
                </p>
            </div>
        </div>
        
        <div className="m-0 p-2 w-full  flex flex-wrap gap-0 justify-center   ">
            <div className="py-2 px-5 min-w-[300px] min-h-[50px] w-full  md:w-1/2   ">
                <div className='w-full h-full  flex flex-row border-b p-3'>                   
                    <InsightIcon   fill = {theme === "dark" ? "#161616" :  "#fff"  } stroke = {theme === "dark" ? "#fff" :  "#161616"  }  />                                    
                    <div className=' m-auto ml-5'>  
                        <h2 className=' font-semibold mb-3 '>Insight</h2>                             
                        <p className='  text-sm '>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                
                </div>
            </div>
            <div className="py-2 px-5 min-w-[300px] min-h-[100px]  w-full md:w-1/2 ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <SkyshotIcon    fill = {theme === "dark" ? "#fff" :  "#161616"  } stroke = {theme === "dark" ? "#161616" :  "#fff"  } />                
                    <div className='m-auto ml-5'>  
                        <h2 className='font-semibold  mb-3'>Skyshot</h2>                             
                        <p className='text-sm '>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>               
                </div>
            </div>
            <div className="py-2 px-5 min-w-[300px] min-h-[100px] w-full md:w-1/2 ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <InnovationIcon    fill = {theme === "dark" ? "#fff" :  "#161616"  } stroke = {theme === "dark" ? "#161616" :  "#fff"  } />                
                    <div className='m-auto ml-5'>  
                        <h2 className='font-semibold  mb-3'>Innovation & Research Lab</h2>                             
                        <p className='text-sm'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>               
                </div>
            </div>
            <div className="py-2 px-5 min-w-[300px] min-h-[100px] w-full md:w-1/2  ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <DevelopmentLifecycleIcon  fill = {theme === "dark" ? "#fff" :  "#161616"  } stroke = {theme === "dark" ? "#fff" :  "#161616"  }/>                
                    <div className='m-auto ml-5'>  
                        <h2 className='font-semibold  mb-3'>Product Development Lifecycle</h2>                             
                        <p className=' text-sm'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
                    </div>               
                </div>
            </div>
            <div className="py-2 px-5 min-w-[300px] min-h-[100px] w-full md:w-1/2 ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <LeanProductIcon  fill = {theme === "dark" ? "#fff" :  "#161616"  } stroke = {theme === "dark" ? "#161616" :  "#fff"  }/>                
                    <div className='m-auto ml-5  mb-3'>  
                        <h2 className='font-semibold  mb-3'>Lean Product Engineering</h2>                             
                        <p className='text-sm'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
                    </div>               
                </div>
            </div>
            <div className="py-2 px-5 min-w-[300px] min-h-[100px] w-full md:w-1/2  ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <ProfessionalServicesIcon    fill = {theme === "dark" ? "#fff" :  "#161616"  } stroke = {theme === "dark" ? "#161616" :  "#fff"  } />                                
                    <div className='m-auto ml-5 '>  
                        <h2 className='font-semibold  mb-3'>Professional Services</h2>                             
                        <p className='text-sm'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>               
                </div>
            </div> 
            <div className="py-2 px-5 min-w-[300px] min-h-[200px] w-full md:w-1/2 ">
                <div className='w-full h-full  flex flex-row border-b p-5'>
                    <ChannelPartnerIcon  fill = {theme === "dark" ? "#161616" :  "#fff"  }  stroke = {theme === "dark" ? "#fff" :  "#161616"  }/>                
                    <div className='m-auto ml-5'>  
                        <h2 className='font-semibold  mb-3'>Channel Partners</h2>                             
                        <p className='text-sm '>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>               
                </div>
            </div> 
        </div>
    </div>
  )
}

export default HowWeDoIt