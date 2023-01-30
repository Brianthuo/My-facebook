import { Route, Routes } from 'react-router-dom'
import './App.css';
import Loginpage from '../src/pages/loginpage/login'
import Homepage from '../src/pages/homepage/homepage'


function App() {
const isLoggedin = window.localStorage.getItem("loggedin")

  return (
    <div className="App">
      <Routes>
        <Route path='/' 
        element={isLoggedin == "true" ? <Homepage/> : <Loginpage/> }/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
