import React from 'react'
import { useTheme } from 'next-themes'
import { WhoWeAreIcon } from '../../icons'
import { PaneTitle1, PaneTitle2}  from '../titles/PaneTitle'

const WhoWeAre = () => {
  const { theme } = useTheme()

  return (
    <div className='w-full m-0  py-10  ' >
      <div className='w-[90%]  md:w-[85%] lg:w-[80%]  mx-auto flex flex-col md:flex-row'>
        <div className='w-[40%] flex flex-col align-top  px-10'>
          <PaneTitle1>WHO WE ARE</PaneTitle1>
          <div className='m-auto w-[250px] h-[250px] text-center '>          
            <WhoWeAreIcon fill = {theme === "dark" ? "#0074c8" :  "red"  }   />
          </div>
        </div>
        
        <div className='m-0 w-[60%] flex flex-col p-14'>
          <PaneTitle2>We Accelerate Technology Transformations</PaneTitle2>
          <p>
          Technology has been at the forefront of industry & business transformation over the last two decades. At Wavelabs, we have the Vision to foresee these rapid evolutions in technology, Agility to proactively invest in new competencies and Customer Centricity to help accelerate the adoption of these new technologies.
          </p>
          <br/>
          <p>
          We are an AI-First, new-age Technology company for the Digital, Cognitive & Industry 4.0 Era. Come, reimagine the future with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre