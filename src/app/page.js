export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="text-center mt-20">
        <h1 className="text-2xl ">VELKOMMEN</h1>
        <h1 className="text-2xl ">SIGN IN TO CONTINUE</h1>
      </div>
      <form className=" h-[30rem] w-[40rem] mt-16 flex flex-col items-center space-y-12">
        <div className="flex flex-col mt-20">
          <label>Email:</label>
          <input type="email" className="h-7 w-[15rem] border-b-2 outline-none" placeholder='you@example.com'></input>
        </div>
        <div className="flex flex-col" >
          <label>Password</label>
          <input type="password" className="h-7 w-[15rem] border-b-2 outline-none " placeholder='12345@'></input>
        </div>

      </form>
    </main>
  );
}
