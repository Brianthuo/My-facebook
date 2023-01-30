import React from 'react'
import './post.scss'
import profileImg from '../../../images/image 1.jpg'
import {AiFillVideoCamera} from 'react-icons/ai'
import {GrGallery} from 'react-icons/gr'
import {BiHappyAlt} from 'react-icons/bi'

const Post = () => {
  return (
    <div className='post'>
      <div className="post-items">
        <img src={profileImg} alt="" />
        <input type="text" placeholder='What on your mind.....' />
      </div>
        <div className="buttons">
          <button>< AiFillVideoCamera className='iconVideo'/>Live video</button>
          <button type='file'><GrGallery className='iconGallary'/>Photo/Video</button>
          <button ><BiHappyAlt className='iconHappy'/>Feeling/Activity</button>
        </div>
    </div>
  )
}

export default Post