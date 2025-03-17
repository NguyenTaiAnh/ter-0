import { Input } from '@/components/ui/input'
import { Search, Settings } from 'lucide-react'
import React from 'react'

function ExploreHeader() {
  return (
    <header className='h-[53px] px-4 flex flex-row justify-between items-center'>
        {/* searchBar */}
      <div id="searchBar" className=' relative w-full'>
        <Input placeholder='Search' className=' pl-9 w-full h-[44px] border-[1px] rounded-4xl focus-visible:border-gray-border focus-visible:ring-0 border-gray-border' />
        <Search className="absolute left-0 top-[9%] m-2.5 h-4 w-4 text-muted-foreground"/>
      </div>

      {/* setting */}
      <div id='setting' className='w-[56px] '>
        <Settings className=' float-right cursor-pointer'/>
      </div>
    </header>
  )
}

export default ExploreHeader
