import { Navigation } from '@/components/Navigation'
import { tabsProfile } from '@/constants/tabs.const'
import React from 'react'

function ProfileTabs() {
  return (
    <div>
       <Navigation tabs={tabsProfile}/>
    </div>
  )
}

export default ProfileTabs
