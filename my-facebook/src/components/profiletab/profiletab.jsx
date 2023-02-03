import React from 'react'
import profileImg from '../../images/image 1.jpg'
import './profiletab.scss'

const profiletab = () => {
  return (
    <div className='profile-tab'>
        <div className="top">

        </div>

        <div className="middle">
          <div className="left">
          <div className="profileImg">
            <img src={profileImg} alt="" />
          </div>
          <div className="user">
            <p>user</p>
          </div>
          </div>
        </div>
        <div className="bottom"></div>

    </div>
  )
}

export default profiletab