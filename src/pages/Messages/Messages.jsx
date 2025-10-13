import React from 'react'
import Card from '../../components/Card/Card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../../components/Conversation/Conversation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';
import Advertisement from '../../components/Advertisements/Advertisements';

const Messages = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg:gray-100'>
      <div className='w-full justify-between flex pt-5'>

        {/* left side */}
        <div className='w-full md:w-[70%]'>
          <Card padding={0}>
            <div className='border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg'>
              Messaging
            </div>
            <div className='border-b-1 border-gray-300 px-5 py-2'>
              <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused <ArrowDropDownIcon /></div>
            </div>

            {/* div for chat */}
            <div className="w-full md:flex">
              <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400'>

                {/* for each conversation */}
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              </div>
              <div className='w-full md:w-[60%] border-gray-400'>
                <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                  <div>
                    <p className='text-sm font-semibold'>User 1</p>
                    <p className='text-sm text-gray-400'>Hi this is user 1</p>
                  </div>
                  <div><MoreHorizIcon/></div>
                </div>

                <div className='h-[360px] w-full overflow-auto border-b-1 border-gray-300'>
                  <div className='w-full border-b-1 border-gray-300 gap-3 p-4'>
                  <div className='rounded-[100%] cursor-pointer w-16 h-15' src="https://cdn.vectorstock.com/i/500p/97/32/male-profile-silhouette-vector-2139732.jpg"/>
                  <div className='my-2'>
                    <div className='text-md'>User 1</div>
                    <div className='text-sm text-gray-500'>hi this i user 1</div>
                  </div>
                  </div>
                  <div className='w-full'>
                    {/* for each messages */}
                    <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                      <div className='shrink-0'>
                        <img className='w-8 h-8 rounded-[100%] cursor-pointer' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"/>
                      </div>
                      <div className='mb-2 w-full'>
                        <div className='text-md'>User 1</div>

                        <div className='text-sm mt-6 hover:bg-gray-200'>This is text messages</div>
                        <div className='my-2'><img className='w-[240px] h-[180px] rounded-md' src="https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80"/></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* space for typing messages */}
                <div className='p-2 w-full border-b-1 border-gray-200'>
                  <textarea rows={4} className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a messages'/>
                </div>

                <div className='p-3 flex justify-between'>
                  <div>
                    <label htmlFor="messageImage" className='cursor-pointer'><ImageIcon/></label>
                    <input id="messageImage" type="file" className='hidden'/>
                  </div>
                  <div className='px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-950 text-white'>Send</div>

                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* right side */}
        <div className='hidden md:flex md:w-[25%]'>
          <div className='sticky top-19'>
            <Advertisement/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
