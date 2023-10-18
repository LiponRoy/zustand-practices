"use client"
import { useCounterStore } from '@/store/count-store';
import React from 'react'

const Navbar = () => {
    const { count } = useCounterStore();
    return (
        <div className=' text-white w-full h-20 bg-neutral-700 flex justify-between items-center px-8'>
            <div className="">
                Zustand practices
            </div>
            <div className="">
                Count : {count}
            </div>
        </div>
    )
}

export default Navbar