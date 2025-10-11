import React from 'react'
import Card from '../Card/Card'

const Advertisements = () => {
  return (
    <div className='sticky top-18'>
        <Card padding={0}>
            <div className='relative h-25'>
            <div className='relative w-full h-22 rounded-md'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2z-Qg3pe-RY9Lv8kQ4Ik3uFlebhYk4I9R0Q&s' className='rounded-t-md h-full w-full' />
            </div>
            <div className='absolute top-14 left-[40%] z-10'>
                <img src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png" className='rounded-full border-2 h-14 w-14 border-white cursor-pointer'/>
                </div>
        </div>

        <div className='px-5 my-5 mx-auto'>
            <div className='text-sm font-semibold text-center'>Shivam Kumar</div>
            <div className='text-sm my-3 text-center'>Get the Latest jobs and industry news</div>
            <div className='text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer'>Explore</div>
        </div>

        </Card>
      
    </div>
  )
}

export default Advertisements
