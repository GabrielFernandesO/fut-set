import duringCard from "../components/Cards/duringCard"
export default function Home(){
    return (
        <main className="h-screen">
           
           
           <div className="bg pt-4 pb-4 h-full w-80 flex-col items-center flex  ">
           
            <duringCard></duringCard>
           
          
            
            <div className="mt-10 w-72 bg-branco h-96 rounded-xl shadow-2xl ">
            <div className="bg-vermelho h-10 w-72 rounded-t-xl justify-center flex items-center">
                <h1 className="text-white">LEAGUES</h1>
            </div>
           </div>
           </div>
                


           

        </main>
    )
}