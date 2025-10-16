import React from 'react'
import ProfileCard from '../../components/ProfileCard/Profilecard'
import Advertisements from '../../components/Advertisements/Advertisements'
import Card from '@mui/material/Card'

const Notification = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className='h-fit'>
               <ProfileCard/>
            </div>
        </div>

         {/* middle side */}
        <div className='w-[100%] py-5 sm:w-[50%]'>
            <div>
                <Card padding={0}>
                    <div className='w-full'>
                        {/* for each notifications */}
                        <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                            <img src='https://i.pinimg.com/736x/82/47/0b/82470b4ed44c3edacfcd4201e2297050.jpg' className='rounded-full cursor-pinter w-15 h-15'/>
                            <div>Dummy User has sent you friend request.</div>
                        </div>

                        {/* for each notifications */}
                        <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                            <img src='https://i.pinimg.com/736x/82/47/0b/82470b4ed44c3edacfcd4201e2297050.jpg' className='rounded-full cursor-pinter w-15 h-15'/>
                            <div>Dummy User has commented on your post.</div>
                        </div>

                    </div>


                </Card>
            </div>

        </div>

        {/* right side */}
        <div className='w-[26%] py-5 hidden md:block'>

            <div className='my-5 sticky top-10'>
                <Advertisements/>
            </div>
        </div>
         
    </div>
  )
}

export default Notification
