import React from 'react'
import profileImg from '../../images/image 1.jpg'
import './profiletab.scss'
import {AiFillPlusCircle} from 'react-icons/ai'


const profiletab = ({name, surname}) => {
  return (
    <div className='profile-tab'>
        <div className="top">

        </div>

        <div className="middle">

          <div className="profile">
            <img src={profileImg} alt="" />

          <div className="user">
            <h1>{name} {surname} <br />1 friend</h1>

          </div>

          </div>
            <div className="buttons">
              <button className='add-story'><AiFillPlusCircle className='icon'/>Add a story</button>
              <button className='edit'>edit profile</button>
            </div>
        
        </div>
        <div className="bottom">
        <nav>
            <ul>
                <li>post</li>
                <li>about</li>
                <li>friends</li>
                <li>photos</li>
                <li>videos</li>
                <li>checkins</li>
                <li>more</li>
            </ul>
        </nav>
        </div>

    </div>
  )
}

export default profiletab