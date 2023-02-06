import React from 'react'
import './ProfileInfo.scss'
import Post from '../../minipages/miniComponents/post/Post'
import Shared from '../../minipages/miniComponents/shared/Shared'
import Bio from '../Bio/Bio'

const Profileinfo = () => {
  return (
    <div className='info-container'>
        <div className="left">
            <Bio/>
        </div>
        <div className="right">
        <Post/>
        <Shared/>
        </div>
    </div>
  )
}

export default Profileinfo