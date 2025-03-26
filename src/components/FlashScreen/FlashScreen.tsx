import React from 'react'
import { Image } from '../Image'

const FlashScreen = () => {
  return (
    <div className='absolute inset-0 z-[51] bg-black flex justify-center items-center'>
        <Image path='/icons/logo.svg' alt='logo' w={0} h={0}  className="w-auto h-auto"/>
    </div>
  )
}

export default FlashScreen