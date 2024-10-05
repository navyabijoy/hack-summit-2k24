import React from 'react'
import SideBar from '../dashboard/components/SideBar'
import Header from '../dashboard/components/Header'

function DashboardLayout({children}) {
    return (
        <div>
            <div className='md:w-64 hidden md:block'>
                <SideBar/>
            </div>
            <div className='md:ml-64 p-10'>
                <Header />
                <div className='p-10'>
                {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout