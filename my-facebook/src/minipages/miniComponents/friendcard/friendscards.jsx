import React from 'react'
import './friendscards.scss'
import profileImg from '../../../images/image 1.jpg'
import {FiUserPlus} from 'react-icons/fi'

const friendscard = () => {
  return (
    <div>
         <div className="card">
        <img src={profileImg} alt="" />
        <h4>brian thuo</h4>
        <button> <FiUserPlus className='icon'/> Add friend</button>
        </div>
    </div>
  )
}

export default friendscard