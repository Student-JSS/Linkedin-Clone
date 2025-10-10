import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginComp from '../../components/GoogleLogin/GoogleLoginComp';

const LandingPage = () => {
  return (
    <div className="my-4 py-[50px] md:py-[120px] px-5 md:flex justify-between items-center bg-[#f3f2ef] min-h-screen">
      {/* Left Section */}
      <div className="md:w-[40%] text-center md:text-left mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-gray-600 leading-snug">
          Build your professional brand & network to get ahead in your career
        </h1>

        {/* Google Button */}
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer">
          <GoogleLoginComp/>
        </div>

        {/* Email Button */}
        <Link to={"/Login"} className="flex mx-auto mt-4 py-3 px-4 bg-white gap-2 rounded-3xl items-center w-[80%] md:w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer transition">
          Sign in with email
        </Link>

        {/* Policy Text */}
        <p className="mx-auto mb-4 text-sm w-[80%] md:w-[70%] mt-6 text-gray-700">
          By clicking continue to join or sign in, you agree to{' '}
          <span className="text-blue-800 cursor-pointer hover:underline">
            LinkedIn's User Agreement
          </span>
          ,{' '}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Privacy Policy
          </span>
          , and{' '}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Cookies Policy
          </span>
          .
        </p>

        {/* Join Now */}
        <Link to={'/SignUp'} className="mx-auto text-center mb-4 text-lg w-[80%] md:w-[70%] mt-4 text-gray-800">
          New to LinkedIn?{' '}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Join Now
          </span>
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-[50%] mt-10 md:mt-0 flex justify-center">
        <img
          alt="LinkedIn landing illustration"
          className="w-full h-auto object-contain"
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
        />
      </div>
    </div>
  );
};

export default LandingPage;
