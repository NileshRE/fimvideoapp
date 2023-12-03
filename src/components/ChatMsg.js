import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ChatMsg = ({Name, Msg}) => {
  return (
    <div className='flex items-center p-2'>
    <FaUserCircle size={20} color='grey' />
    <h1 className='ml-1 text-sm'>{Name}</h1>
    <p className='text-sm ml-4 font-medium'>{Msg}</p>
    </div>
  )
}

export default ChatMsg