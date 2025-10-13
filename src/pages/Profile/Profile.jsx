import Card from '@mui/material/Card'
import React from 'react'
import Advertisements from '../../components/Advertisements/Advertisements'
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
  return (
    <div className='px-5 xl:px-50 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
        <div className='flex justify-between'>

            {/* left side main section */}
            <div className='w-full md:w-[70%]'>
                <div>
                    <Card padding={0}>
                        <div className='w-full h-fit'>
                            <div className='relative w-full h-[200px]'>
                                <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white'><EditIcon/></div>
                                <img src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg" className='w-full h-[200px] rounded-tr-lg rounded-tl-lg'/>
                                <div className='absolute object-cover top-24 left-6 z-10'> <img className='rounded-full border-2 border-white cursor-pointer w-35 h-35' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"/></div>
                            </div>

                            <div className='mt-10 relative px-8 py-2'>
                                <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white'><EditIcon/></div>
                                
                                <div className='w-full'>
                                    <div className='text-2xl'>User 1</div>
                                    <div className='text-gray-700'>I am Software Engineer</div>
                                    <div className='text-sm text-gray-500'>Delhi, India</div>
                                    <div className='text-md text-blue-800 w-fit cursor-pointer hover:underline'>2 Connections</div>

                                    <div className='md:flex w-full justify-between'>
                                        <div className='my-5 flex gap-5'>
                                        <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Open to</div>
                                        <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Share</div>
                                        <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Logout</div>
                                        </div>

                                        <div className='my-5 flex gap-5'>
                                        <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Message</div>
                                        <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Connect</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Card>
                </div> 

                <div className='mt-5'>
                    <Card padding={1}>
                        <div className='flex justify-between items-center'>
                            <div className='text-xl p-2'>💻 About Me</div>
                            <div className='cursor-pointer p-3'><EditIcon/></div>
                        </div>
                        <div className= "p-3" >I’m Shivam, a passionate Frontend Developer focused on building clean, responsive, and engaging web interfaces. I specialize in HTML, CSS, JavaScript, and React, creating user-centered designs that blend functionality with aesthetics. I enjoy working with modern tools like Tailwind CSS, Next.js, and Git to deliver high-quality, scalable projects. My goal is to craft seamless digital experiences that leave a lasting impact. I’m constantly learning, improving my skills in UI/UX design and problem-solving, and staying updated with the latest web trends to create meaningful and efficient web solutions</div>

                    </Card>
                </div>
                <div className='mt-5'>
                    <Card padding={1}>
                        <div className='flex justify-between items-center'>
                            <div className='text-xl p-4'>Skills </div>
                            </div>
                            <div className='text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap p-3'>
                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>React JS</div>

                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>Node JS</div>

                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>Express JS</div>

                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>MongoDB</div>
                            </div>
                        
                    </Card>

                </div>
            </div>



            {/* right side add */}
            <div className='hidden md:flex md:w-[20%]'>
                <div className='sticky top-19'>
                    <Advertisements/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
