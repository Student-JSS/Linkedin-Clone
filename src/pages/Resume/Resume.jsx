import React from 'react'
import Advertisements from '../../components/Advertisements/Advertisements'

const Resume = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg:gray-100'>
      <div className='w-[100%] py-5 sm:w-[74%] '>
        <img className='w-full h-full rounded-lg' src="https://template.canva.com/EAFzfwx_Qik/4/0/1131w-T9RPR4DPdiw.jpg"/>
      </div>
      <div className='w-[26%] py-5 hidden md:block'>
        <div className='sticky top-10'>
            <Advertisements/>
        </div>
      </div>
    </div>
  )
}

export default Resume
