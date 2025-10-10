import { useState } from 'react'
import Navbar1 from './components/NavbarV1/Navbar1'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'


 
function App() {
  

  return (
    <div className='bg-gray-100 w-[100%] h-[100%]  box-border'>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
