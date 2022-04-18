
import React, {useEffect, Suspense, lazy} from 'react'
import {useAppContext} from '../contexts/appContext'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import ThemedSuspense from '../components/ThemedSuspense'


const Page404 = lazy(() => import('../pages/404'))

const Layout = ({ children }) => {
  const router = useRouter()
  const { user } = useAppContext();
  
    return (
     
        <div className='flex flex-col w-screen h-screen justify-between m-0 p-0  ' >
            <Navbar />
            <div className=" flex flex-col w-full items-center justify-center"  >
                <Suspense fallback={<ThemedSuspense />}>   
                    {children}
                </Suspense>
            </div>
            <Footer />
            <Copyright/>
        </div>
    )
};

export default Layout;