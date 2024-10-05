"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlinePlay } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { usePathname } from 'next/navigation';




function SideBar() {
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<HiOutlineHome />,
            path:'/dashboard'

        },
        {
            id:2,
            name:'Courses',
            icon:<HiOutlineBookOpen />,
            path:'/dashboard/courses'

        },
        {
            id:3,
            name:'Quiz',
            icon:<HiOutlineSquare3Stack3D />,
            path:'/dashboard/quiz'

        },
        {
            id:4,
            name:'Gesture',
            icon:<HiOutlinePlay />,
            path:'/dashboard/gesture'

        },
        {
            id:5,
            name:'Community',
            icon:<HiOutlineChatBubbleLeftRight />,
            path:'/dashboard/community'

        },
        {
            id:6,
            name:'Logout',
            icon:<HiMiniArrowLeftStartOnRectangle />,
            path:'/dashboard/community'

        },
    ]

    const path=usePathname()
    return (
        <div className="fixed h-full md:w-64 p-5 shadow-md"> 
            <Image src={'/assests/Unify.png'} width={160} height={100} />
            <hr className='my-5' />

            <ul>
                {Menu.map((item, index) => (
                    <li key={index} className={`flex items-center gap-2 text-blue-900 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg ${item.path === path && 'bg-gray-100 text-black'}`}>
                    <Link href={item.path} className="flex items-center gap-2 w-full">
                        <div className='text-4xl'>{item.icon}</div>
                        <h2>{item.name}</h2>
                    </Link>
                    </li>
                ))}
            </ul>



        </div>

    )
}

export default SideBar