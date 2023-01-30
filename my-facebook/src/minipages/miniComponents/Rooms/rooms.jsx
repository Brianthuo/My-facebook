import React from 'react'
import './rooms.scss'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
import {FiPaperclip, FiUsers } from 'react-icons/fi'


const rooms = () => {
  return (
    <div className='room-container'>
        <div className="roomProfile">
            <AiOutlineVideoCameraAdd className='icon'/>
            <h4>Brian's room</h4>
            <p>Get started</p>
            <button>create room</button>
        </div>
        <div className="roomInfo">
            <p><FiUsers className='icon'/> Have live audio conversations or video chat with friends.</p>
            <p><FiUsers className='icon'/> Control who and when can join you in your room</p>
            <p><FiPaperclip className='icon'/>People without a Facebook account can join with a link</p>
        </div>
    </div>
  )
}

export default rooms