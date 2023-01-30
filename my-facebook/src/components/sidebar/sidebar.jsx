import React from 'react'
import './sidebar.scss'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaUserFriends, FaWarehouse, FaMicrophone} from 'react-icons/fa'
import {BsFacebook, BsWatch, BsFillBookmarkFill} from 'react-icons/bs'
import {CiTimer} from 'react-icons/ci'
import {AiFillFlag, AiFillVideoCamera, AiFillCamera} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BiLogOut} from 'react-icons/bi'


const Sidebar = ({name, logout}) => {
  return (
    <div className='sidebar'>
        <ul>
            <li><p ><CgProfile className='icon' /><h3>{name}</h3></p></li>
            <li><p ><FaUserFriends className='icon'/> <h3>Find friends</h3></p></li>
            <li><p ><AiFillCamera className='icon'/><h3>most recent</h3></p></li>
            <li><p ><BsFacebook className='icon'/> <h3>welcome</h3></p></li>
            <li><p ><HiOutlineUserGroup className='icon'/>  <h3>groups</h3></p></li>
            <li><p ><FaWarehouse className='icon'/> <h3>marketplace</h3></p></li>
            <li><p ><FaMicrophone className='icon'/><h3>ad center</h3></p></li>
            <li><p ><BsWatch className='icon'/> <h3>watch</h3></p></li>
            <li><p ><CiTimer className='icon'/><h3>memories</h3></p></li>
            <li><p ><BsFillBookmarkFill className='icon'/> <h3>saved</h3></p></li>
            <li><p ><AiFillFlag className='icon'/> <h3>pages</h3></p></li>
            <li><p ><AiFillVideoCamera className='icon'/> <h3>reels</h3></p></li>
            <li onClick={logout}><p><BiLogOut className='icon'/><h3>Logout</h3></p></li>

        </ul>
    </div>
  )
}

export default Sidebar