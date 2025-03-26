import EditProfileContainer from '@/containers/EditProfile/EditProfileContainer'
import { ModalLayout } from '@/layouts/ModalLayout'
import { getUserSSR } from '@/lib/services/auth.service'
import React from 'react'

const page =async () => {
  const response = await getUserSSR()
  const currentUser =await response.json()
  return (
    <ModalLayout>
     <EditProfileContainer currentUser={currentUser}/>
    </ModalLayout>
  )
}

export default page