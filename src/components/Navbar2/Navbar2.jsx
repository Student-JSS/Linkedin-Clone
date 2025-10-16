import React, { useState } from 'react'
import "./Navbar2.css"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WorkIcon from '@mui/icons-material/Work';
import { useLocation, Link } from 'react-router-dom';


const Navbar2 = () => {

    const [dropdown, setDropDown] = useState(false);
    const location = useLocation();

    // console.log(location)
  return (
    <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000'>
        <div className='flex gap-2 items-center'>
            <Link to={"/feeds"}>
                 <img className='w-8 h-8' src={"https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"} alt="logo"/>
            </Link>
            <div className='relative'>
                <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search'/>
                {
                    dropdown && <div className='absolute w-88 left-0 bg-gray-200'>
                    <div className='flex gap-2 mb-1 items-center cursor-pointer'>
                        <div><img className='w-10 h-10 rounded-full' src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"/></div>
                        <div>Shivam</div>
                    </div>
                    
                     
                </div>

                }
                
            </div>
           
        </div>

        <div className='hidden gap-10 md:flex'>
            <Link to={"/feeds"}className='flex flex-col items-center cursor-pointer'>
                <HomeIcon sx={{color:location.pathname==='/navbar2' ? "black" :"gray"}}/>
                <div className={`text-sm text-gray-500 ${location.pathname==='/navbar2' ? "border-b-3" :""}`}>Home</div>
            </Link>

            <Link to={"/myNetwork"} className='flex flex-col items-center cursor-pointer'>
                <GroupIcon sx={{color:location.pathname==='/myNetwork' ? "black" :"gray"}}/>
                <div className={`text-sm text-gray-500 ${location.pathname==='/myNetwork' ? "border-b-3" :""}`}>My Network</div>
            </Link>

            <Link to={"/resume"} className='flex flex-col items-center cursor-pointer'>
                <WorkIcon sx={{color:location.pathname==='/resume' ? "black" :"gray"}}/>
                <div className={`text-sm text-gray-500 ${location.pathname==='/resume' ? "border-b-3" :""}`}>Resume</div>
            </Link>

            <Link to={"/messages "} className='flex flex-col items-center cursor-pointer'>
                <MessageIcon sx={{color:location.pathname==='/messages' ? "black" :"gray"}}/>
                <div className={`text-sm text-gray-500 ${location.pathname==='/messages' ? "border-b-3" :""}`}>Message</div>
            </Link>

            <Link to={"/notification"} className='flex flex-col items-center cursor-pointer'>
                <div><NotificationsActiveIcon sx={{color:location.pathname==='/notification' ? "black" :"gray"}}/> <span className='p-1 rounded-full text-sm bg-red-700 text-white'>1</span></div>
                <div className={`text-sm text-gray-500 ${location.pathname==='/notification' ? "border-b-3" :""}`}>Notifications</div>
            </Link>

            <Link to={`/profile/jhgf`}className='flex flex-col items-center cursor-pointer'>
                <img  className="w-8 h-8 rounded-full"src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"/>
                <div className='text-sm text-gray-500'>Me</div>
            </Link>

            

        </div>
    </div>
  )
}

export default Navbar2
