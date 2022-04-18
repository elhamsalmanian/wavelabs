import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  bg-gray-200 dark:bg-black py-10 '>
      <div className='m-auto w-[80%] flex flex-row flex-wrap justify-start  '>

        <div className=' w-full lg:w-1/5 my-10'>
          <div className='float-left bg-slate-900 dark:bg-slate-900 px-10 py-7 rounded-3xl'>
            <a href="https://www.wavelabs.ai/" rel="noopener" >            
              <img className="m-auto  w-[100px] " alt="" src="/images/footer-logo.svg" />
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/5 my-10'>
            <h5 className='text-blue-600 dark:text-[#f05a3f] font-semibold mb-6'>
              <a href="https://www.wavelabs.ai/practices/">PRACTICES</a>
            </h5>
            <ul className='list-none m-0 p-0'>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/experience-design/'>Experience Design</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/digital-engineering/'>Digital Engineering</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/data-engineering/'>Data Engineering</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/artificial-intelligence/'>Artificial Intelligence</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/connectivity/'>Connectivity</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/industry-4-0/'>Industry 4.0</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/technology-enabled-services/'>Technology Enabled Services</a>
              </li>
            </ul>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/5 my-10'>
            <h5 className='text-blue-600 dark:text-[#f05a3f] font-semibold mb-6'>
              <a href="https://www.wavelabs.ai/offerings/">OFFERINGS</a>
            </h5>
            <ul className='list-none m-0 p-0'>
              <li className='mb-3'>
                <a href='https://insight.wavelabs.ai/'>Insight</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/skyshot/'>Skyshot</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/innovation-and-research-lab/'>Innovation & Research Lab</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/product-development-lifecycle/'>Prod Dev Lifecycle</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/lean-product-engineering/'>Lean Product Engineering</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/professional-services/'>Professional Services</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/channel-partners/'>Channel Partners</a>
              </li>
            </ul>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/5 my-10'>
            <h5 className='text-blue-600 dark:text-[#f05a3f] font-semibold mb-6'>
              <a href="#">COMPANY</a>
            </h5>
            <ul className='list-none m-0 p-0'>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/aboutus/'>About us</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/aboutus/#LeadershipTeam'>Leadership</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/news-and-updates/'>News and Updates</a>
              </li>
              <li className='mb-3'>
                <a href='http://careers.wavelabs.ai/'  rel='noreferrer' target={'_blank'} >Careers</a>
              </li>
             
            </ul>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/5 my-10'>
            <h5 className='text-blue-600 dark:text-[#f05a3f] font-semibold mb-6'>
              <a href="#">RESOURCES</a>
            </h5>
            <ul className='list-none m-0 p-0'>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/blogs/'>Blogs</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/case-studies/'>Case Studies</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/infographics/'>Infographics</a>
              </li>
              <li className='mb-3'>
                <a href='https://www.wavelabs.ai/whitepapers/' >Whitepapers</a>
              </li>
             
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer