import React from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const AddModal = () => {
  return (
    <div className=''>
        <div className='flex gap-4 items-center'>
            <div className='relative'>
                <img className='w-15 h-15 rounded-full' alt='Img' src={"https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"}/>
            </div>
            <div className='text-2xl'>Shivam Kumar</div>
        </div>

        <div>
            <textarea cols={50} rows={5} placeholder='What do you want to talk about?' className='my-3 outline-0 text-xl p-2'></textarea>
        </div>
        <div>
            <img className='w-20 h-20 rounded-xl' src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg"/>
        </div>

        <div className='flex justify-between items-center'>
            <div className='my-6'>
                <label className='cursor-pointer' htmlFor="inputFile"><InsertPhotoIcon/></label>
                <input type="file" className='hidden' id="inputFile"/>
            </div>
            <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit'>Post</div>
             
        </div>
      
    </div>
  )
}

export default AddModal
