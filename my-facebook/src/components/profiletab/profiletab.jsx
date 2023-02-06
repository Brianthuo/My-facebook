import React from 'react'
import profileImg from '../../images/image 1.jpg'
import './profiletab.scss'
import {AiFillPlusCircle} from 'react-icons/ai'
import {BsFillCameraFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {BsPencilFill, BsFillCloudArrowUpFill} from 'react-icons/bs'
import land from '../../images/landscape2.jpg'
import { createPortal } from 'react-dom'
import Upload from '../Modals/Uploadprofile/upload'
import { useState  } from 'react'



const Profiletab = ({name, surname}) => {

  const [isOpen, setIsOpen]= useState(false)
  const[image, setImage] = useState(null)
  const [filename, setFileName] =useState("No image selected")

  const openPortal = (e) =>{
    e.preventDefault()
    setIsOpen(true)
  }

  const deletephoto = ()=>{
    setFileName("No selected File")
    setImage(null)
  }




  return (
    <div className='profile-tab'>
        <div className="top">
          <img src={land} alt="" />
          

        </div>

        <div className="middle">

          <div className="profile">
            <img src={profileImg} alt="" />
            <BsFillCameraFill className='icon' onClick={openPortal}/>

          <div className="user">
            <h1>{name} {surname} <br />1 friend</h1>

          </div>

          </div>
            <div className="buttons">
              <button className='add-story'><AiFillPlusCircle className='icon'/>Add a story</button>
              <button className='edit'><BsPencilFill className='icon'/>edit profile</button>
            </div>

            {isOpen&& createPortal(
              <Upload  open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="uploadportal">
                  <form  onClick={()=> document.querySelector(".input-field").click()}>
                  <input type="file"  id='upload' accept='image/*' className='input-field' hidden 
                   onChange={({target: {files}})=>{files[0] && setFileName(files[0].name)
                   if(files){
                    setImage(URL.createObjectURL(files[0]))
                   }}}/>
                  {
                    image ? 
                    <img src={image} alt={filename}/>
                    :
                    <>
                    <BsFillCloudArrowUpFill className='cloud' />
                    <h3>Browe to get image</h3>
                    </>
                  }
                  </form>
                  <div className="file">
                    {filename}
                    <MdDelete className='delete' onClick={deletephoto}/>
                  </div>
                    <button className='post-image'>post image</button>
                </div>



              </Upload>,
              document.body
            )}
        
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

export default Profiletab