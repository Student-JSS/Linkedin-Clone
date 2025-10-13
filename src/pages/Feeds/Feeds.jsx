import Card from '../../components/Card/Card'
import React, { useState } from 'react'
import ProfileCard from '../../components/ProfileCard/Profilecard'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ArticleIcon from '@mui/icons-material/Article';
import Advertisements from '../../components/Advertisements/Advertisements';
import Post from '../../components/Post/Post';
import Modal from '../../components/Modal/Modal';
import AddModal from '../../components/AddModal/AddModal';
// import { useState } from 'react';


const Feeds = () => {

    const [addPostModal, setAddPostModal] = useState(false);

    const handleOpenPostModal = ()=>{
        setAddPostModal(prev=>!prev)
    }
    

  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left side */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
            <div className='h-fit'>
               <ProfileCard/>
            </div>

            <div className='w-full my-5'>
                <Card padding={1}>
                    <div className='w-full flex justify-between'>
                        <div>Profile Viewers</div>
                        <div className='text-blue-900'>23</div>
                    </div>

                    <div className='w-full flex justify-between'>
                        <div>Post Impressions</div>
                        <div className='text-blue-900'>90</div>
                    </div>
                </Card>
            </div>

        </div>

         {/* middle side */}
        <div className='w-[100%] py-5 sm:w-[50%]'>
            {/* post section */}

             <div>
                <Card padding={1}>
                    <div className='flex gap-2 items-center'>
                        <img src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png" className="rounded-4xl w-13 h-13 border-2 border-white cursor-pointer"/>
                        <div onClick={()=>setAddPostModal(true)} className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a Post</div>
                    </div>

                    <div onClick={()=>setAddPostModal(true)} className='w-full flex mt-3'>
                        <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[31%] hover:bg-gray-100'><VideocamIcon sx={{color: "green"}}/>Video</div>

                        <div onClick={()=>setAddPostModal(true)} className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[31%] hover:bg-gray-100'><AddAPhotoIcon sx={{color: "blue"}}/>Photo</div>

                        <div onClick={()=>setAddPostModal(true)} className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[31%] hover:bg-gray-100'><ArticleIcon sx={{color: "orange"}}/>Article</div>
                    </div>
                </Card>
             </div>

             <div className='border-b-1 border-gray-400 w-[100%] my-5'>

                <div className='w-full flex flex-col gap-5'>
                    <Post/>

                    <Post/>

                    <Post/>

                </div>
             </div>

        </div>

        {/* right side */}
        <div className='w-[26%] py-5 hidden md:block'>

            <div>
                <Card padding={1}>
                    <div className='text-xl'>LinkedIn News</div>
                    <div className='text-gray-600'>Top Stories</div>
                    <div className='my-1'>
                        <div className='text-md'>Buffett to remain Berkshire  chair</div>
                        <div className='text-xs text-gray-400'>2h ago</div>
                    </div>

                    <div className='my-1'>
                        <div className='text-md'>Foreign Investments surge again</div>
                        <div className='text-xs text-gray-400'>3h ago</div>
                    </div>
                </Card>
            </div>

            <div className='my-5 sticky top-10'>
                <Advertisements/>
            </div>
        </div>
         {
            addPostModal && <Modal closeModal={handleOpenPostModal} title={""}>
            <AddModal/>
        </Modal>
         }
    </div>
  )
}

export default Feeds
