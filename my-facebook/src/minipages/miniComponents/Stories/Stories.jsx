import React from 'react'
import './stories.scss'
import profileImg from '../../../images/image 1.jpg'
import {BsPlusLg} from 'react-icons/bs'
import {MdTimer} from 'react-icons/md'
import {CgCardHearts} from 'react-icons/cg'
import {RiMessengerLine} from 'react-icons/ri'


const Stories = () => {
  return (
    <div className='this-container'>
        <div className="card">
            <img src={profileImg} alt="" /><br /> <br />
            <BsPlusLg className='plus'/> 
            <p>Create Story</p>
        
        </div>
        <div className="info">
            <p><CgCardHearts className='icon'/>  Share everyday moments with friends and family.</p>
            <p><MdTimer  className='icon'/>   Stories disappear after 24 hours.</p>
            <p><RiMessengerLine  className='icon'/>   Replies and reactions are private</p>
        </div>

    </div>
  )
}

export default Stories