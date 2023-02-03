import React from 'react'
import './navbar.scss'
import {AiFillHome} from 'react-icons/ai'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {TbGridDots} from 'react-icons/tb'
import {BsMessenger} from 'react-icons/bs'
import {GoBell} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
            <div className="navbar">
                <div className="logo">
                    <h1>facebook</h1>
                    <input type="text" placeholder='Search facebook' />
                </div>

                <div className="icons">
                    <ul>
                        <Link to='/homepage'>
                        <li> <AiFillHome className='home-icon'/></li>
                        </Link>
                        <li><HiOutlineUserGroup className='groups'/></li>
                    </ul>
                </div>

                <div className="other">
                <button>Find Friends</button>
                    <ul>
                        <li><TbGridDots/></li>
                        <li><BsMessenger/></li>
                        <li><GoBell/></li>
                        <Link to='/profile'>
                        <li><CgProfile/></li>
                        </Link>
                    </ul>
                </div>
                </div>
            </div>
  )
}

export default Navbar