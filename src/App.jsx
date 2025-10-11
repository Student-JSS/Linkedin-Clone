import { useState } from 'react'
import Navbar1 from './components/NavbarV1/Navbar1'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Navbar2 from './components/Navbar2/Navbar2'
import Feeds from './pages/Feeds/Feeds'


 
function App() {
  const isLogin = true;
  

  return (
    <div className='bg-gray-100 w-[100%] h-[100%]  box-border'>
      {isLogin? <Navbar2/>:<Navbar1/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Feeds' element={<Feeds/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
