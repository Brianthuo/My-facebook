import React , {useState} from 'react'
import './HomepageContent.scss'
import {BsBookFill} from 'react-icons/bs'
import {BiMoviePlay, BiVideoPlus} from 'react-icons/bi'
import Stories from '../miniComponents/Stories/Stories'
import Reels from '../miniComponents/reels/reels'
import Rooms from '../miniComponents/Rooms/rooms'
import Post from '../miniComponents/post/Post'
import Shared from '../miniComponents/shared/Shared'


const HomepageContents = ({name, surname}) => {

  const [ section , setSection] = useState("Stories")
 


  return (
    <div className='HContents'>
      <div className="postProfile">
       <div className="profilenav">
        <ul>
          <li onClick={() => setSection("Stories")}><BsBookFill className='icon' /><h3>Stories</h3></li>
          <li onClick={() => setSection("reels")}><BiMoviePlay className='icon'/><h3>Reels</h3></li>
          <li onClick={() => setSection("rooms")}><BiVideoPlus className='icon'/><h3>Rooms</h3></li>
        </ul>
        <div className="profileBody">
          { section==='Stories' && <Stories/>}
          { section==='reels' && <Reels/>} 
          { section==='rooms' && <Rooms/>}
        </div>
       </div>
       <Post/>
       <Shared name={name} surname={surname}/>
       <Shared/>
       <Shared/>
       <Shared/>
       <Shared/>
       <Shared/>
      </div>
    </div>
  )
}

export default HomepageContents