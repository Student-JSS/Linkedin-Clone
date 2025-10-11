import React from 'react'
import Card from '../Card/Card'

const ProfileCard = () => {
  return (
    <Card padding={0}>
        <div className='relative h-25'>
            <div className='relative w-full h-22 rounded-md'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2z-Qg3pe-RY9Lv8kQ4Ik3uFlebhYk4I9R0Q&s' className='rounded-t-md h-full w-full' />
            </div>
            <div className='absolute top-14 left-6 z-10'>
                <img src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png" className='rounded-full border-2 h-16 w-16 border-white cursor-pointer'/>
                </div>
        </div>

        <div className='p-5'>
            <div className='text-xl'>Shivam Kumar</div>
            <div className='text-sm my-1'>@Amazon Software Eng</div>
            <div className='text-sm my-1'>Delhi, India</div>
            <div className='text-sm my-1'>Amazon</div>

        </div>
    </Card>
  )
}

export default ProfileCard
 