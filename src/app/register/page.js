"use client"

import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import styles from './page.module.css'

export default function Login() {

    const [showPassword, setShowPassword] = useState(false)
    
    function togglePassword(){
      setShowPassword(!showPassword)
    }
    
      return (
        <main className="flex flex-col items-center h-screen">
    
          <div className="text-center mt-20">
            <h1 className="text-2xl ">VELKOMMEN</h1>
            <h1 className="text-2xl ">SIGN IN TO CONTINUE</h1>
          </div>
          <form className={` h-[30rem] w-[40rem] mt-4 flex items-center flex-col space-y-4 form_login ${styles.form_login}`} >
            <div className="flex flex-col mt-20 mb-8 ">
              <label>Email:</label>
              <div className="flex items-center w-[15rem] border-b-2 border-gray-200 focus-within:border-gray-300 pl-1">
                <span className="pr-1">
                  <FaRegEnvelope className="text-gray-500" />
                </span>
                <input type="email"  className="h-7 w-64 border-0 outline-none autofill:bg-white" placeholder='Ex: you@example.com'></input>
              </div>
    
            </div>
            <div className="flex flex-col" >
              <label>Password:</label>
              <div className="flex items-center w-[15rem] border-b-2 border-gray-200 focus-within:border-gray-300 pl-1">
              <span className="pr-0.5">
              <MdOutlineLock className="text-gray-500 text-md" />
              </span>
                
                  <input type={!showPassword ? "password" : "text"}
                   className="h-7 w-64 border-0 outline-none autofill:bg-white" placeholder='Ex: 12345@'></input>
                
                
                <span className="pr-2 cursor-pointer">
                  { !showPassword && (
                    <LuEye onClick ={togglePassword}/>
                  )}
                  { showPassword && (
                    <LuEyeOff onClick = {togglePassword}/>
                  )}
                </span>
                
              </div>
    
            </div>
            <div className="">
              <a className="ml-28 text-sm cursor-pointer hover:text-gray-400 text-gray-600 underline underline-offset-1">
                Forgot your password?
              </a>
            </div>
            <div>
              <button className=" bg-blue_sky h-8 w-28 rounded-lg text-white hover:bg-blue_sky_strong mt-10">
                LOGIN
              </button>
    
            </div>
            <div>
              <p >
                Do not have an account?
                <span className="pl-1 text-blue-500 hover:text-blue-700 cursor-pointer underline underline-offset-1">
                  Register Now
                </span>
              </p>
            </div>
    
          </form>
    
        </main>
      );
    }
    