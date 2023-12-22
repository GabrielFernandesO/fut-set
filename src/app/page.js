export default function Login() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="text-center mt-20">
        <h1 className="text-2xl ">VELKOMMEN</h1>
        <h1 className="text-2xl ">SIGN IN TO CONTINUE</h1>
      </div>
      <form className=" h-[30rem] w-[40rem] mt-4 flex items-center flex-col space-y-4">
        <div className="flex flex-col mt-20 mb-8 ">
          <label>Email:</label>
          <input type="email" className="h-7 w-[15rem] border-b-2 outline-none" placeholder='you@example.com'></input>
        </div>
        <div className="flex flex-col" >
          <label>Password</label>
          <input type="password" className="h-7 w-[15rem] border-b-2 outline-none " placeholder='12345@'></input>
        </div>
        <div className="">
          <a className="ml-28 text-xs cursor-pointer hover:text-gray-400 text-gray-600">
            Forgot your password? 
          </a>
        </div>
       <div>
          <button className=" bg-blue-500 h-8 w-28 rounded-lg text-white hover:bg-blue-600 mt-10">
            LOGIN
          </button>
          
          </div>
          <div>
            <p > 
              Do not have an account?
              <span className="pl-1 text-blue-500 hover:text-blue-700 cursor-pointer">
                 Register Now
              </span>
            </p>
          </div>
     
      </form>

    </main>
  );
}
