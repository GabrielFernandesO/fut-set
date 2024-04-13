"use client"

import Input from "../components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import { toast } from "react-toastify";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const [loginUser, setLoginUser] = useState(null);
  const [passwordUser, setPasswordUser] = useState(null);
  const router = useRouter()


  async function login(e) {
    e.preventDefault()

    let user = {
      email: loginUser,
      password: passwordUser
    }
console.log(user)
    try {
      const response = await axios.post('http://localhost:4000/login', user);
      const data = await response.data;

      if (response.status == 200) {
        Cookies.set('loggedIn', data.token, { expires: 2 });
        router.push('/profile')
        console.log(data);
        toast.success('Login successfully')
        router.push('/profile')
      }
    } catch {
      console.log("Something goings wrong")
    }
  }

  return (
    <main className="flex flex-col items-center h-screen">

      <div className="text-center mt-20">
        <h1 className="text-2xl ">VELKOMMEN</h1>
        <h1 className="text-2xl ">SIGN IN TO CONTINUE</h1>
      </div>
      <form onSubmit={(e) => login(e)} className={` h-[30rem] w-[40rem] mt-4 flex items-center flex-col space-y-4 form_login`} >

        <Input name={"Email"} type={'email'} spanIcon={'FaRegEnvelope'} placeholder={'Ex: Example@gmail.com'} onChange={(e) => setLoginUser(e.target.value)} />
        <Input name={"Password"} type={'password'} spanIcon={'FaUserLock'} placeholder={'Ex: 1234'} onChange={(e) => setPasswordUser(e.target.value)} />

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
            <Link href='/register'>Register Now</Link>
          </span>
        </p>
      </div>

    </form>

    </main >
  );
}
