import React from 'react'
import './shared.scss'
import {SlOptions} from 'react-icons/sl'
import {AiOutlineClose, AiFillLike} from 'react-icons/ai'
import profile from '../../../images/image 1.jpg'

const Shared = () => {
  return (
    <div className='posted'>
        <div className="nav">
            <nav>
                <ul>
                    <div className="username">
                        <img src={profile} alt="" />
                        <div className="user">
                            <li>Brian churchill thuo</li>
                            <li>6d</li>
                        </div>

                    </div>

                    <div className="options">
                        <SlOptions className="options"/>
                        <AiOutlineClose className='close'/>

                    </div>

                </ul>
            </nav>
        </div>

        <div className="imagepost">
            <div className="description">
                This is my first post

            </div>
            <div className="image"> 
            <img src={profile} alt="" />
            </div>
        </div>

        <div className="likes">
            <div className="like"> <AiFillLike className='icon'/> 1.2K</div>
            <div className="comment"> comment 100   share 20</div>
        </div>

        <div className="footernav">
            <div className="like">like</div>
            <div className="comment"> commnet</div>
            <div className="share">share</div>
        </div>



    </div>
  )
}

export default Shared