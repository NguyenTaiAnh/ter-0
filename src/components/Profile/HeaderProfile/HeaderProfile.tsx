import { ArrowLeft } from 'lucide-react';
import React from 'react'

function HeaderProfile() {
  return (
    <header className='flex flex-grow h-[53px] px-4'>
        <div className='w-[56px] items-center flex'>
            <ArrowLeft />
        </div>
        <div className=''>
            <p className='text-[20px] text-text-default font-bold'>user.name</p>
            <p className='text-icon-default text-[13px]'>0 posts</p>
        </div>
    </header>
  )
}

export default HeaderProfile