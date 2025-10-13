import React from 'react'

const Conversation = () => {
  return (
    <div className='flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200'>
                  <div className='shrink-0'>
                    <img className='w-12 h-12 rounded-[100%] cursor-pointer' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"/>
                  </div>
                  <div>
                    <div className='text-md'>Shubham</div>
                    <div className='text-sm text-gray-500'>Engineer Amazon</div>
                  </div>

                </div>
  )
}

export default Conversation
