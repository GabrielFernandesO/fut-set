import MiniOdd from "../MiniCards/MiniOdd"
export default function Odd (){

    return (
        <section>
            <div className=" mt-4 bg-white h-60 w-72 rounded-xl shadow-lg">
                <div className="bg-vermelho rounded-t-xl  h-12 w-72 flex items-center justify-center">
                    <h1 className="text-white">BEST ODDS</h1>
                </div>
               <MiniOdd></MiniOdd>
               
                
               </div>
        </section>
    )
    
} 