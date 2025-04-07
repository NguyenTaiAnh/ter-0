import { IRequestComment } from '@/types/post.type'
import React from 'react'
interface ListCommentProps {
    comments: IRequestComment
}
const ListComment:React.FC<ListCommentProps> = ({comments}) => {
    console.log({comments})
  return (
    <div>ListComment</div>
  )
}

export default ListComment