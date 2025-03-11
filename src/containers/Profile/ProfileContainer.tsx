"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function ProfileContainer() {
    const router= useParams();
  return (
    <div>
      test ProfileContainer {router.username}
    </div>
  )
}

export default ProfileContainer
