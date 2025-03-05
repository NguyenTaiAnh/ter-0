import React from 'react'

interface RootAuthLayoutProps {
    children: React.ReactNode
}
const RootAuthLayout: React.FC<RootAuthLayoutProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default RootAuthLayout