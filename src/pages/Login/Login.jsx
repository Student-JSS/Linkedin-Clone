import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/GoogleLoginComp'

const Login = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
            <div className='text-3xl  font-semibold'>Sign In</div>
            <div className='my-5'>
                <GoogleLoginComp/>
            </div>

            <div className='flex items-center gap-2'>
                <div className='border-b-1 border-gray-400  w-[45%]' /> <div>or</div> <div className='border-b-1 border-gray-400 w-[45%] my-6'></div>
            </div>

            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder="Email"/>
                </div>

                <div>
                    <label htmlFor="email">Password</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder="Password"/>
                </div>

                

                <div className='w-full hover:vg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2'>
                    Login
                </div>
                


            </div>
        </div>

        <div className='mt-4 mb-14'>Already on LinkedIn? <Link to={'/SignUp'}className='text-blue-800 cursor-pointer'>Join Now</Link></div>
      
    </div>
    
  )
}

export default Login
