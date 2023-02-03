import React from 'react'
import './profile.scss'
import Navbar from '../../components/navbar/navbar'
import Profiletab from '../../components/profiletab/profiletab'

const profile = () => {
  return (
    <div className='profile'>
      <div className="theNav">
        <Navbar />
    </div>
    <div className="profile-container">
    <Profiletab/>
    </div>

    </div>
  )
}

export default profile