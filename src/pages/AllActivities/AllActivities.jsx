import React from 'react'
import ProfileCard from '../../components/ProfileCard/Profilecard'
import Advertisements from '../../components/Advertisements/Advertisements'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import Post from '../../components/Post/Post'


const AllActivities = () => {

    const {id} = useParams();

    console.log(id);


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
                <Card padding={1}>
                    <div className='text-xl p-3'>All Activities</div>
                    <div className='cursor-pointer w-fit p-2  border-1 rounded-4xl bg-green-800 my-2 text-white font-semibold '>Posts</div>

                    <div className='my-2 flex flex-col gap-2'>
                        <div>
                            <Post/>
                        </div>

                        <div>
                            <Post/>
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

export default AllActivities
