"use client"

import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";


export default function Register() {

  const [showPassword, setShowPassword] = useState(false)

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <main className="bg-blue flex flex-col items-center justify-center h-screen">
      <div className="flex items-center flex-col bg-blue_dark h-[45rem] w-[27rem] rounded-xl ">
        <div className="text-center mt-20">
          <div className="h-32 w-36  flex-col flex items-center justify-center">
            <Image src={'/logo.png'} width={190} height={64} alt='logoRegister' />
            <h1 className=" text-gray_weak text-2xl ">REGISTER</h1>
          </div>
        </div>
        <form className={`w-full  flex items-center flex-col space-y-8 form_login`}  >
          <div className="flex flex-col mt-20 ">
            <label className="text-gray_weak">Email:</label>
            <div className="flex items-center w-[15rem] border-b-2 border-gray_weak focus-within:border-gray_strong pl-1">
              <span className="pr-1">
                <FaRegEnvelope className="text-gray_weak" />
              </span>
              <input type="email" autoComplete="off" className="bg-blue_dark h-7 w-64 border-0 outline-none " placeholder='Ex: you@example.com'></input>
            </div>
          </div>
          <div className="flex flex-col mb-8" >
            <label className="text-gray_weak">Password:</label>
            <div className="flex items-center w-[15rem] border-b-2 border-gray_weak focus-within:border-gray_strong pl-1">
              <span className="pr-0.5">
                <MdOutlineLock className="text-gray_weak text-md" />
              </span>

              <input type={!showPassword ? "password" : "text"}
                className="bg-blue_dark h-7 w-64 border-0 outline-none " placeholder='Ex: 12345@' autoComplete="off"></input>


              <span className="pr-2 cursor-pointer">
                {!showPassword && (
                  <LuEye className='text-gray_weak' onClick={togglePassword} />
                )}
                {showPassword && (
                  <LuEyeOff className='text-gray_weak' onClick={togglePassword} />
                )}
              </span>

            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label className="text-gray_weak">Confirm Password:</label>
            <div className="flex items-center w-[15rem] border-b-2 border-gray_weak focus-within:border-gray_strong pl-1">
              <span className="pr-0.5">
                <MdOutlineLock className="text-gray_weak text-md" />
              </span>

              <input type={!showPassword ? "password" : "text"}
                className="bg-blue_dark h-7 w-64 border-0 outline-none" placeholder='Ex: 12345@' autoComplete="off"></input>


              <span className="pr-2 cursor-pointer">
                {!showPassword && (
                  <LuEye className='text-gray_weak' onClick={togglePassword} />
                )}
                {showPassword && (
                  <LuEyeOff className='text-gray-weak' onClick={togglePassword} />
                )}
              </span>

            </div>
          </div>


          <div className="">

          </div>
          <div>
            <button className=" bg-blue h-8 w-28 rounded-lg text-white hover:bg-gray_strong mt-10">
              REGISTER
            </button>

          </div>
          <div>

          </div>

        </form>
      </div>
    </main>
  );
}
