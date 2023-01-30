import React from 'react'
import './createAccount.scss'
import {AiOutlineClose} from 'react-icons/ai'

const CreateAccount = ({children, open, onClose}) => {
    if(!open) return null

  return (
    <div className="overlay" >
    <div className='modal'>
        <AiOutlineClose onClick={onClose}  className="close" />
        {children}
    </div>
    </div>
  )
}

export default CreateAccount