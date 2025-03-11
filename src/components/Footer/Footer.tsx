import { ListFooter } from '@/types/footer.type'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <div className='flex py-3 px-4 flex-row  w-full flex-wrap fixed bottom-0 left-0 justify-center items-center'>
    {ListFooter.map(i => (
        <Link href={''} className='pl-4' key={i.id}>{i.name}</Link>
    ))}
   </div>
  )
}

export default Footer
