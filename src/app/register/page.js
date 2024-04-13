"use client"

import { useState } from "react";
import Input from '../components/Input/Input';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
  const [fullName, setFullName] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null);



  async function register(e){
    e.preventDefault()

    const user = {
      name: fullName,
      nickname: nickname,
      email: email,
      password: password,
      confirm_pass: confirmPassword
    }
    console.log('Register form Sended!', user)
    toast.success('Register Confirm')
    
  }

  return (
    <main className="flex flex-col items-center h-screen">

    <div className="text-center mt-20">
      <h1 className="text-2xl ">REGISTER</h1>
    </div>
    <form onSubmit={(e) => register(e)} className={` h-[30rem] w-[40rem] mt-8 flex items-center flex-col space-y-4 form_login`} >
    
      <Input name={"Full name"} type={'text'}  spanIcon={'FaRegUser'} placeholder={'Ex: Fernand Schimmit'} onChange={(e) => setFullName(e.target.value)}/>
      <Input name={"Nickname"} type={'text'}  spanIcon={'FaNapster'} placeholder={'Ex: Fernand010'} onChange={(e) => setNickname(e.target.value)}/>
      <Input name={"Email"} type={'email'}  spanIcon={'FaRegEnvelope'} placeholder={'Ex: Fernand010@gmail.com'} onChange={(e) => setEmail(e.target.value)}/>
      <Input name={"Password"} type={'password'}  spanIcon={'FaUserLock'} placeholder={'Ex: 1234'} onChange={(e) => setPassword(e.target.value)}/>
      <Input name={"Confirm-Password"} type={'password'}  spanIcon={'FaUserLock'} placeholder={'Ex: 1234'} onChange={(e) => setConfirmPassword(e.target.value)}/>

      <div>
        <button className=" bg-blue_sky h-8 w-28 rounded-lg text-white hover:bg-blue_sky_strong mt-10">
          REGISTER
        </button>
      </div>
    </form>

  </main>
  );
}
