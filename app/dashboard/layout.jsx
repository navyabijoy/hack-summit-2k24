import React from 'react'
import SideBar from '../dashboard/components/SideBar'

function DashboardLayout({children}) {
    return (
        <div>
            <div className='md:w-64 hidden md:block'>
                <SideBar/>
            </div>
            <div className='md:ml-64 p-10'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout