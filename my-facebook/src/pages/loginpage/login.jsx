import React, {useState} from 'react'
import './login.scss'
import Modal from '../../components/Modals/createAccount'
import { createPortal } from 'react-dom';



const Login = () => {

    const [isOpen, setIsOpen]= useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setfirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState('')
    const [success, setSuccess]= useState('')



    const LoginhandleSubmit =(e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/loginUser" , {
            method: "POST",
            crossdomain: true,
            headers:{
                "content-type": "application/json",
                 Accept: "application/json",
                 "Access-control-Allow-Origin": "*"
            },
            body:JSON.stringify({
                email,
                password,
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "login-user")
            if(data.status === "ok"){
                alert("login successful")
                window.localStorage.setItem("token", data.data)
                window.localStorage.setItem("loggedin", true)
                window.location.href = "./homepage"
            }
        })
    }

    const createAcchandleSubmit =(e)=>{
        e.preventDefault()
        console.log(firstname, surname, email, password, date)
        fetch("http://localhost:5000/register" , {
            method: "POST",
            crossdomain: true,
            headers:{
                "content-type": "application/json",
                 Accept: "application/json",
                 "Access-control-Allow-Origin": "*"
            },
            body:JSON.stringify({
                firstname,
                surname,
                email,
                password,
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "userRegister")
        })

    }

    const openPortal = (e) =>{
        e.preventDefault()
        setIsOpen(true)

    }


    
  return (
    <div className='container'>
        <div className="items">
            <div className="content">
                <div className="contentContainer">
                <span className='facebook'>facebook</span> <br/>
                 <p>Facebook helps you connect and share <br /> with people in your life</p>
                </div>
            </div>
            <div className="form">
                <form action="" onSubmit={LoginhandleSubmit}>
                    <input type= "email"
                     placeholder='Email address or number' 
                     onChange={(e)=> setEmail(e.target.value)}
                     required
                    />

                    <input type= "password" 
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)} 
                    required
                     />

                    <button className='login'type='submit' onClick={LoginhandleSubmit} >Log in</button> <br />
                    <p>{success}</p>
                    <a href="/" >forgotten password</a>
                    <hr className='line' />
                    <a  href="1" className='account' onClick={openPortal}>Create account</a>
                </form>
                <p className='brand'><span className='create'>Create a page</span>  for celebrity,brand or business </p>
                
                {isOpen && createPortal(
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                     <div className="portal" >
                    <div className="content">
                    <h2>sign up</h2>
                    <p>it is quick and easy</p>        
                     </div> 
                    <hr /> 
                    <form action="" onSubmit={createAcchandleSubmit}>
                    <input type="text" placeholder='Firstname'  onChange={(e)=>setfirstname(e.target.value)} required/>
                    <input type="text" placeholder='Surname'   onChange={(e)=>setSurname(e.target.value)} required/>
                    <input type="text" placeholder='Mobile number or email address'   onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder='New password'  onChange={(e)=>setPassword(e.target.value)} required /> <br />
                    <label htmlFor="">Date of Birth</label>
                    <input type= "date" onChange={(e)=>setDate(e.target.value)} />
                    <select name="" id="" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="submit" className='submit' />

                    </form>
                        </div>
                     </Modal>,
                     document.body
                )}

            </div>
        </div>
    </div>

  )
}

export default Login