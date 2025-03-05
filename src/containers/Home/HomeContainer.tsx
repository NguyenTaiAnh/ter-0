import Navigation from '@/components/Navigation/Navigation'
import { tabsHome } from '@/constants/tabsHome.const'
import React from 'react'

const HomeContainer = () => {
  return (
    <section>
        <Navigation tabs={tabsHome}/>
    </section>
  )
}

export default HomeContainer