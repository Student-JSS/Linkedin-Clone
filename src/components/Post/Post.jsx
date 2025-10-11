import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);

    const handleSendComment = (e)=>{
        e.preventDefault();

    }

    const desc = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, unde nobis eligendi voluptatibus minima asperiores aut id veniam doloribus alias ipsum error qui suscipit minus hic iusto velit quisquam corporis.`
  return (
    <Card>
        <div className='flex gap-3 p-4'>
            <div className='w-12 h-12 rounded-4xl'>
                <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"/>
            </div>
            <div>
                <div className='text-lg font-semibold'>Dummy User</div>
                <div className='text-xs text-gray-500'>SDE-II Eng. @Amazon</div>
            </div>
        </div>

        <div className='text-md p-4 my-3 whitespace-pre-line flex-grow'>
            {seeMore?desc: `${desc.slice(0, 80)}...`} <span onClick={()=>setSeeMore(prev=>!prev)} className='cursor-pointer text-gray-500'>{seeMore?"See Less":'See More'}</span>
        </div>

        <div className='w-[100%] h-[300px]'>
            <img className="w-full h-full" src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg"/>
        </div>


        <div className='my-2 p-4 flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
                <ThumbUpIcon sx={{color: "blue", fontSize: 12 }}/> <div className='text-sm text-gray-600'>1 Likes</div>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='text-sm text-gray-600'>2 Comments</div>
            </div>
        </div>

        <div className='flex p-1'>
            <div className='w-[33%] justify-center flex gap-2 items-center border-b-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
                <ThumbUpIcon sx={{fontSize:22, color:"blue"}}/> <span>Like</span>
            </div>

            <div onClick={()=>setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-b-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
                <CommentIcon sx={{fontSize:22}}/> <span>Comment</span>
            </div>

            <div className='w-[33%] justify-center flex gap-2 items-center border-b-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
                <SendIcon sx={{fontSize:22}}/> <span>Share</span>
            </div>
        </div>

        {/* comment section */}
        {
            comment && <div className='p-4 w-full'>
            <div className='flex gap-2 items-center'>
                <img src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"  className='rounded-full w-12 h-12 border-2 border-white cursor-pointer'/>
                <form className='w-full flex gap-2' onSubmit={handleSendComment}>
                    <input placeholder='Add a Comment...' className='w-full  border-1 py-3 px-5 rounded-3xl hover:bg-gray-100'/>
                    <button type="submit" className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1.2 px-3'>Send</button>

                </form>
            </div>
            {/* other's comment section */}
            <div className='w-full p-4'>
                <div className='my-4'>
                    <div className='flex gap-3'>
                        <img src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"  className='rounded-full w-12 h-12 border-2 border-white cursor-pointer'/>
                        <div className='cursor-pointer'>
                            <div className='text-md'>Dummy User</div>
                            <div className='text-sm text-gray-500'>@Amazon SDE-II</div>

                        </div>
                    </div>

                    <div className='px-11'>Hi this is beautiful</div>
                </div>
            </div>
        </div>
        }
    </Card>
  )
}

export default Post
