import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
        <Link to={'/'}className='flex justify-between'>
            <div className='flex gap-1 items-center cursor-pointer'>
                <h3 className='text-blue-800 font-bold text-3xl'>Linked</h3>
                <img src={"https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"} alt="LinkedInLogo" className='w-7 h-7'/>
                </div>
            </Link>
            <div className='flex box-border md:gap-4 gap-2 justify-center items-center'>
                <div className="flex gap-3">
      {/* Join now button (outline) */}
      <Link to={'/SignUp'} className="border border-[#0a66c2] text-[#0a66c2] font-semibold px-5 py-1.5 rounded-full hover:bg-blue-50 transition">
        Join now
      </Link>

      {/* Sign in button (filled) */}
      <Link to={'/Login'} className="bg-[#0a66c2] text-white font-semibold px-5 py-1.5 rounded-full hover:bg-[#004182] transition">
        Sign in
      </Link>
    </div>
        </div>

    </nav>
  )
}

export default Navbar1
