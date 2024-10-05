"use client"

import { useUser } from '@clerk/nextjs'
import React from 'react'

function Greeting(){
    const {user} = useUser();
    return (
        <div>
            <div>
                <h2 className='text-2xl'>Hello, 
                    <span className='font-bold'>{user?.fullName}</span>
                    <p className='text-sm text-gray-500'>Welcome to your Dashboard!</p>
                </h2>
            </div>
        </div>
    )
}

export default Greeting