import React, {useState, useEffect} from 'react'
import './profile.scss'
import Navbar from '../../components/navbar/navbar'
import Profiletab from '../../components/profiletab/profiletab'

const Profile = () => {

  const[Info, setInfo]= useState("")

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


  return (
    <div className='profile'>
      <div className="theNav">
        <Navbar />
    </div>
    <div className="profile-container">
    <Profiletab name={Info&&Info.userdata.firstname} surname={Info&&Info.userdata.surname}/>
    
    </div>

    </div>
  )
}

export default Profile