import React from 'react'
import './friends.scss'
import {BiVideoPlus, BiSearchAlt2} from 'react-icons/bi'
import {SlOptions} from 'react-icons/sl'
import {AiOutlinePlus} from 'react-icons/ai'


const friends = () => {
  return (
    <div className='friends'>
      <div className="friendContent">
        <div className="contacts">
          <div className="contactnav">

            <div className="header">Contacts</div>

            <div className="icons">
              <BiVideoPlus/>
              <BiSearchAlt2/>
              <SlOptions/>
            </div>
            
          </div>
        </div>
        <div className="group">
          <h1>Group conversations</h1>
          <div className="creategroup">
          <button><AiOutlinePlus/></button> <h2>Create new group</h2>

          </div>
        </div>
      </div>
    </div>
  )
}

export default friends