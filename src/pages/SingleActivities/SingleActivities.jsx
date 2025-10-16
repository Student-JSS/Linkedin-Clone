import React from 'react'
import Post from '../../components/Post/Post'
import Card from '@mui/material/Card'
import Advertisements from '../../components/Advertisements/Advertisements'
import ProfileCard from '../../components/ProfileCard/Profilecard'

const SingleActivities = () => {
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
                            <Post/>
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

export default SingleActivities
