import React from 'react'

const ImageModal = ({isCircular}) => {
  return (
    <div className='p-3 relative flex items-center flex-col h-full'>
      {
        isCircular ? (
          <img className='rounded-full w-[150px] h-[150px]' src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'/>
        ):(
          <img className='rounded-xl w-full h-[200px] object-cover' src='https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg'/>

        )
      }

      <label htmlFor="btn-submit" className='absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Upload</label>
      <input type='file' className='hidden' id='btn-submit'/>

      <div className='absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Submit</div>
        
      
    </div>
  )
}

export default ImageModal
