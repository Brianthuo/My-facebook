import React from 'react'
import './Upload.scss'
import {AiOutlineClose} from 'react-icons/ai'

const Upload = ({children, onClose, open}) => {
    if(!open) return null
  return (
    <div className="uploadoverlay">
        <div className="uploadmodal">
        <AiOutlineClose onClick={onClose}  className="close" />
        {children}

        </div>
    </div>
  )
}

export default Upload