import React, {useEffect, useState}from 'react'
import './homepage.scss'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import HomepageContents from '../../minipages/HomepageContent/HomepageContents'
import Friends from '../../minipages/FriendsPage/friends'
import Post from '../../minipages/miniComponents/post/Post'

const Homepage = () => {

    const[Info, setInfo]= useState('')

    useEffect(() => {
        const getUserData = async () =>{

            fetch("http://localhost:5000/userData" , {
                method: "POST",
                crossdomain: true,
                headers:{
                    "content-type": "application/json",
                     Accept: "application/json",
                     "Access-control-Allow-Origin": "*"
                },
                body:JSON.stringify({
                    token: window.localStorage.getItem("token")
                })
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log( "userdata" ,data)
                 setInfo({userdata: data.data})
            })           
        }
        getUserData();
      },[])

      const logOut = ()=>{
        window.localStorage.clear();
        window.location.href='/'
      }
      
    
  return (
    <div className='home-container'>
        <div className="theNav">
        <Navbar />
    </div>
    <div className="ThisPageContent">
        <Sidebar name={Info&&Info.userdata.firstname} logout={logOut}/>
        <HomepageContents/>
        <Friends/>
        


     </div>

    </div>
  )
}

export default Homepage